from flask import Blueprint, jsonify, request
from . import db
from .models import Expense, TotalAmounts
from datetime import date
import sys

main = Blueprint('main', __name__)

@main.route('/add_expense', methods=['POST'])
def add_expense():
    expense_data = request.get_json()
    # print(expense_data, file=sys.stderr)
    new_expense = Expense(item=expense_data['item'], date=date.today(), price=expense_data['price'], type='Debit')

    amounts = TotalAmounts.query.all()
    # print(amounts, file=sys.stderr)

    if(len(amounts) == 0):
        debit = TotalAmounts(totalCredit = 0, totalDebit = int(expense_data['price']), totalAmount = 0)
        db.session.add(debit)
    else:
        debit = TotalAmounts.query.filter_by(serialNumber=1).all()
        # print(credit, file=sys.stderr)
        updated_debit_amount = int(debit[0].totalCredit) - int(expense_data['price'])
        updated_total_amount = int(debit[0].totalAmount) - int(expense_data['price'])
        debit[0].totalAmount = updated_total_amount
        debit[0].totalDebit = updated_debit_amount
    db.session.add(new_expense)
    db.session.commit()
    return 'Done',201

@main.route('/add_balance', methods=['POST'])
def add_balance():
    credit_data = request.get_json()
    new_credit = Expense(item='Credit', date=date.today(), price=credit_data['balance'], type='Credit')

    amounts = TotalAmounts.query.all()
    # print(amounts, file=sys.stderr)

    if(len(amounts) == 0):
        credit = TotalAmounts(totalCredit = int(credit_data['balance']), totalDebit = 0, totalAmount = int(credit_data['balance']))
        db.session.add(credit)
    else:
        credit = TotalAmounts.query.filter_by(serialNumber=1).all()
        # print(credit, file=sys.stderr)
        updated_credit_amount = int(credit[0].totalCredit) + int(credit_data['balance'])
        updated_total_amount = int(credit[0].totalAmount) + int(credit_data['balance'])
        credit[0].totalAmount = updated_total_amount
        credit[0].totalCredit = updated_credit_amount
    db.session.add(new_credit)
    db.session.commit()
    return 'Done',201

@main.route('/all_expenses')
def all_expenses():
    expense_list = Expense.query.all()
    expenses = []
    for expense in expense_list:
        expenses.append({'serialNumber':expense.serialNumber, 'item':expense.item, 'date': expense.date, 'price':expense.price, 'type': expense.type})
    return jsonify(({'expenses': expenses}))


@main.route('/debit')
def debit():
    expense_list = Expense.query.filter_by(type='Debit')
    expenses = []
    for expense in expense_list:
        expenses.append({'serialNumber':expense.serialNumber, 'item':expense.item, 'date': expense.date, 'price':expense.price, 'type': expense.type})
    return jsonify(({'expenses': expenses}))


@main.route('/credit')
def credit():
    expense_list = Expense.query.filter_by(type='Credit')
    expenses = []
    for expense in expense_list:
        expenses.append({'serialNumber':expense.serialNumber, 'item':expense.item, 'date': expense.date, 'price':expense.price, 'type': expense.type})
    return jsonify(({'expenses': expenses}))


@main.route('/amounts')
def get_amount():
    amount_list = TotalAmounts.query.all()
    amounts = []
    for amount in amount_list:
        amounts.append({'serialNumber':amount.serialNumber, 'total':amount.totalAmount, 'debit': amount.totalDebit, 'credit':amount.totalCredit})
    return jsonify(({'amounts': amounts}))



@main.route('/reset', methods=["DELETE"])
def reset():
    db.session.query(Expense).delete()
    db.session.query(TotalAmounts).delete()
    db.session.commit()
    return 'Done',200
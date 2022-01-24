from flask import Blueprint, jsonify, request
from . import db
from .models import Expense, Credit, TotalAmounts
from datetime import date

main = Blueprint('main', __name__)

@main.route('/add_expense', methods=['POST'])
def add_expense():
    expense_data = request.get_json()
    serial_Number = len(Expense.query.all())+1
    new_expense = Expense(serialNumber=serial_Number, item=expense_data['item'], date=date.today(), price=expense_data['price'], type='Debit')
    db.session.add(new_expense)
    db.session.commit()
    return 'Done',201

@main.route('/add_balance', methods=['POST'])
def add_balance():
    credit_data = request.get_json()
    serial_Number = len(Expense.query.all())+1
    new_credit = Expense(serialNumber=serial_Number, item='Credit', date=date.today(), price=credit_data['balance'], type='Credit')
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
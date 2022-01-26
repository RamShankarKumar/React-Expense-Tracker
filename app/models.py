from . import db

class Expense(db.Model):
    serialNumber = db.Column(db.Integer, primary_key=True, autoincrement=True)
    item = db.Column(db.String(100))
    date = db.Column(db.Date)
    price = db.Column(db.Integer)
    type = db.Column(db.String(10))

class TotalAmounts(db.Model):
    serialNumber = db.Column(db.Integer, primary_key=True, autoincrement=True)
    totalAmount = db.Column(db.Integer)
    totalDebit = db.Column(db.Integer)
    totalCredit = db.Column(db.Integer)
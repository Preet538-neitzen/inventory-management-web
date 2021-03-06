<h1 align="center">Inventory Management Web</h1>

<h4 align='center'> Repository for the Unicode 2019 - 2020 project Inventory Management.</h4>

## File Structure

```
.
├── README.md
├── src/ -> Django workspace
├── client -> React app for web dashboard
└── requirements.txt
```

## Technology Stack

#### Backend

- Django 2.2+ (Python 3.6+)

#### Frontend

- React 16.6+

## Features

#### SignUp and Authentication

Signup is defined in such a way that only the owner/manager can add new employees. This can be done in the Employees section of the web-app. It requires first and last name of the employee, their email, age, gender and password to facilitate their login.

#### Graphs

Graphs showing the sales over time, sales per product, profit earned and money spent are visisble on homepage. This gives the owner a good overview of the sales and helps him decide further sales and marketing strategies.

#### Inventory and Expiry tabs

In the Inventory tab, the user can check all products present in the shop, their respective quantity and their price in an elegant tabular format.The Product fields like Selling price, name and the limits can also be updated here.

In the Expiry tab, the user can also see the products which are going to expire within 3 days and thus, help the user take necessary action and avoid unnecessary losses.

#### Transactions and Transaction History

In the Transactions tab, the user can create entries for buying products for the shop and selling products to the customer.

The id, Product transacted, Number of items, their price and the type of Transaction(Buy/Sell) are displayed in the Transaction History tab.

## Screenshots

![Login](https://user-images.githubusercontent.com/48253287/89116465-fe5c8e80-d4b1-11ea-8722-cba0cba60a72.png)

![Graphs](https://user-images.githubusercontent.com/48253287/89116464-fd2b6180-d4b1-11ea-812f-d8b8554663b7.png)

![Inventory](https://user-images.githubusercontent.com/48253287/89116459-f997da80-d4b1-11ea-9f6c-684d86384b7c.png)

![Expiry](https://user-images.githubusercontent.com/48253287/89116460-fac90780-d4b1-11ea-9362-08aa049206bf.png)

![Employee](https://user-images.githubusercontent.com/48253287/89116461-fb619e00-d4b1-11ea-866d-9a58076ec773.png)

![Transaction](https://user-images.githubusercontent.com/48253287/89116462-fc92cb00-d4b1-11ea-8076-f6d3f06273fa.png)

## Team

#### Developers

1. Aryan Chouhan 
2. Apoorva Ambulgekar 
3. Govind Thakur 
4. Sheel Sanghvi 
5. Jenish Hirpara 
6. Preet Sanghavi 
7. Punit Lodha 

#### Mentors

1. Ankit Gupta 
2. Nirav Jain 
3. Chinmay Khamkar 
4. Dhyey Thummar 
5. Jay Gala 
6. Aditya Jeswani
7. Fenil Doshi

## Build Instructions

#### Backend

```bash
  pip3 install -r requirements.txt
  cd src
  python3 manage.py makemigrations
  python3 manage.py migrate
  python3 manage.py runserver
```

#### Frontend

```bash
  cd client
  npm install
  npm start
```

## Development Instructions

1. We have configured the precommit hook for frontend following the `eslint airbnb` guidelines along with `prettier` code formatting. So make sure to follow the above guideline otherwise code will not be commited.
2. We are using flake8 for backend.
3. The database we are using is sqlite3 for the prototype.
4. Please follow the directory structure for React JS.

## LICENSE

> MIT License
>
> Copyright (c) 2020 Unicode
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# SETUP.

### Prerequisite
- Ubuntu 16.04, 18.04 LTS

- Python3.6

https://www.python.org/downloads/

- Virtualenv
```
pip3 install virtualenv
```

### Setting up

- Create a virtual environment inside the project
```
virtualenv --python=python3.6 venv
```

- Start the virtual environment
```
source venv/bin/activate
```
Can also stop by:
```
deactivate
```

- Install MySQL:
```
sudo apt-get install mysql-server libmysqlclient-dev
```

- Config MySQL:
``
sudo mysql

mysql > CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin'

mysql > GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost';

```

- Install dependencies:
```
pip install -r requirements.txt
```

- Start the project:
```
python app.py
```

- Access http://127.0.0.1:5000
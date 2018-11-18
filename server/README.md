# FUNBID SERVER

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
```
sudo mysql

mysql > CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin'

mysql > GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost';

mysql > CREATE DATABASE fundib;
```

- Install dependencies:
```
pip install -r requirements.txt
```

- Init database:
```
$ export FLASK_APP=funbid.py
$ flask db upgrade
```

- Start app:
```
$ python funbid.py
or 
$ flask run
```

- Create account (no different between admin and user at the moment)
```
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"admin","password":"admin"}' \
  http://127.0.0.1:5000/register
```


** Default route is for testing socketio only **



### Test route

- Get user's profile: /users/id
```
curl --request GET \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjF9.z9WZeWU7tB9t0D8hqYrrIjRsAxaUfcMw9Maxe8on0E4" \
  http://127.0.0.1:5000/users/1
```
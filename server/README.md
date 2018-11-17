# SETUP.

### Prerequisite
- Python3

https://www.python.org/downloads/

- Virtualenv
```
pip install virtualenv
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

- Install dependencies:
```
pip install -r requirements.txt
```

- Start the project:
```
python app.py
```

- Access http://localhost:5000
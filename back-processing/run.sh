#!/bin/bash
virtualenv venv-flask
source venv-flask/bin/activate
pip3 install -r requirements.txt
python3 run.py

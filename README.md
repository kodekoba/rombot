## This project was created by Adriel Ordonez as an assessment for his qualifications for the position of Full-Stack Engineer at RomBot

# Instructions to run application

cd main
pip install -r /path/to/requirements.txt


I:
    cd adrielordonez_rombot2019
    virtualenv --python=python3 venv
    source venv/bin/activate
    pip install django
    pip install fuzzywuzzy
    pip intall django-cors-headers
    pip install requests
    django-admin startproject main
    cd main
    mkdir apps
    cd apps
    django-admin startapp project
    touch __init__.py
    cd ..
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver

II:
    cd adrielordonez_rombot2019
    ng new angular
    cd angular
    ng build
    ng serve

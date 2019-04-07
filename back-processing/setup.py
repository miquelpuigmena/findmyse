from setuptools import setup, find_packages
# To use a consistent encoding
from codecs import open
from os import path

HERE = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(HERE, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()
with open(path.join(HERE, 'requirements.txt'), encoding='utf-8') as f:
    requirements = f.read().splitlines()

setup(
    name='app',

    version='1.0',

    description='Flask App template',
    long_description=long_description,

    # Author details
    author='Miquel Puig Mena',
    author_email='miquelpuigmena@gmail.com',

    # What does your project relate to?
    keywords='template flask',

    # List of packages
    packages=find_packages(),

    # List of run-time dependencies.
    install_requires=requirements,
)

import pytest
import test_fixtureswithdecorators


def setup_module(module):
    print("Connecting to DB")


def teardown_module(module):
    print("Closing DB connection")


def setup_function(function):
    print("lunching browser")


def teardown_function(function):
    print("closing browser")


def test_login():
    print("user has been logged in")


def test_logout():
    print("user has been logged out")

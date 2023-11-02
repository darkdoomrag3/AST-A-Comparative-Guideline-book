import pytest


@pytest.mark.functional
def test_login():
    print("user loggedin")


@pytest.mark.regression
def test_logout():
    print("user logged out")


@pytest.mark.functional
def test_compose_email():
    print("email composed")

import pytest


@pytest.fixture(scope="module")
def setup():
    print("Creating connection to the DB")

    yield
    print("closing the DB")


@pytest.fixture(scope="function")
def before():
    print("Lunching the browser")

    yield
    print("closing the browser")


@pytest.mark.usefixtures("setup", "before")
def test_login(setup, before):
    print("user has been logged in")


def test_logout(setup, before):
    print("user has been logged out")

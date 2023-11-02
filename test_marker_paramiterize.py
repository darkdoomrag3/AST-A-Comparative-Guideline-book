import pytest


def get_data():
    return [
        ("emadbay@gmail.com", "asldjas;ldk"),
        ("emadmay@gmail.com", "dudemnjasd"),
        ("emadhay@gmail.com", "lolojsjdasd")
    ]


@pytest.mark.parametrize("username,password", get_data())
def test_login(username, password):
    print(username, "------", password)

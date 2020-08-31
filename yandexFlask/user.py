
class User:
    def __init__(self, fullname, login, phone, subscriptionExpiration, email, birthday):
        self.fullname = fullname
        self.login = login
        self.phone = phone
        self.subscriptionExpiration = subscriptionExpiration
        self.email = email
        self.birthday = birthday

    def user_data(self):
        result = {
            "fullname": self.fullname,
            "login": self.login,
            "phone": self.phone,
            "subscriptionExpiration": self.subscriptionExpiration,
            "email": self.email,
            "birthday": self.birthday
        }
        return result
class Customer < ActiveRecord::Base
    has_secure_password

    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(value)
    # end

    # def authenticate(value)
    #     return BCrypt::Password.new(self.password_digest) == value
    # end

    has_many(:receipts)
end
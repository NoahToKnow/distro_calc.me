def main():
    sanctum_distribution={'taxes_percentage': 23,
                          'profits_percentage': 5,
                          'owners_comp_percentage': 45,
                          'investing_percentage': 5,
                          'expenses_percentage': 22
                          }

    def calculate_split(amount, sanctum_distribution):
        taxes = amount * (sanctum_distribution['taxes_percentage'] / 100)
        profits = amount * (sanctum_distribution['profits_percentage'] / 100)
        owners_comp = amount * (sanctum_distribution['owners_comp_percentage'] / 100)
        expenses = amount * (sanctum_distribution['expenses_percentage'] / 100)
        investing = amount * (sanctum_distribution['investing_percentage'] / 100)

        return taxes, profits, owners_comp, expenses, investing


    amount = float(input("Enter the dollar amount: "))
    # taxes_percentage = float(input("Enter the percentage for taxes: "))
    # profits_percentage = float(input("Enter the percentage for profits: "))
    # owners_comp_percentage = float(input("Enter the percentage for owner's compensation: "))
    # expenses_percentage = float(input("Enter the percentage for expenses: "))
    # profit_percentage = float(input("Enter the percentage for profit: "))

    taxes, profits, owners_comp, expenses, investing = calculate_split(amount, sanctum_distribution)

    print(f"{str(sanctum_distribution['taxes_percentage'])}% Taxes: ${taxes:.2f}")
    print(f"{str(sanctum_distribution['profits_percentage'])}% Profits: ${profits:.2f}")
    print(f"{str(sanctum_distribution['owners_comp_percentage'])}% Owner's Compensation: ${owners_comp:.2f}")
    print(f"{str(sanctum_distribution['expenses_percentage'])}% Expenses: ${expenses:.2f}")
    print(f"{str(sanctum_distribution['investing_percentage'])}% Investing: ${investing:.2f}")


#00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000#
if __name__ == '__main__':
    main()
#00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000#
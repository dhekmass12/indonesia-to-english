lines = []

with open("indonesia_english.csv", "r") as file:
    for line in file:
        line = line.lower()
        lines.append(line)

with open("result.csv", "w") as file:
    file.write("")

with open("result.csv", "a") as file:
    for line in lines:
        file.write(line)
# STEP 1 - Write a function named `welcome` that prints a welcome message
def welcome():
  print('welcome')

# Step 2 - Write a function named `calc_sum` that
#   - takes in two numbers and
#   - returns their sum
def calc_sum(num1, num2):
  return (num1 + num2)

def addition(num1, num2):
  return (num1 + num2)

def is_same_num(num1, num2):
  if num1 is num2:
    return True
  else:
    return False

def concat_name(first_name, last_name):
  return f"{last_name}, {first_name}"

def char_count(first_str, second_str):
  i = 0
  counter = 0
  while i < len(second_str):
    if second_str[i] == first_str:
      counter += 1
    i += 1
  return counter

def is_last_character_n(name):
  return name[-1] is 'n'

def is_valid_hex_code(string):
  if string[0] != '#' or len(string) != 7:
    return False
  dictionary = 'abcdef'
  i = 1
  while i < len(string):
    if string[i].isdigit() == False:
      if not string[i].lower() in dictionary:
        return False
    i += 1
  return True

def sortedSquaredArray(array):
    # Write your code here.
	result = [0 for _ in array]
	i = 0
	j = len(array) - 1
	for idx in reversed(range(len(array))):
		first = array[i]
		last = array[j]
		if abs(first) > abs(last):
			result[idx] = first * first
			i += 1
		else:
			result[idx] = last * last
			j -= 1
	return result

def firstNonRepeatingCharacter(string):
    # Write your code here.
  charFrequencies = {}
  for char in string:
		charFrequencies[char] = charFrequencies.get(char, 0) + 1
	for idx in range(len(string)):
		character = string[idx]
		if charFrequencies[character] == 1:
			return idx
	return -1

def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    # Write your code here.
    redShirtSpeeds.sort()
	blueShirtSpeeds.sort()
	
	if not fastest:
		reverseArrayInPlace(redShirtSpeeds)
	totalSpeed = 0
	for idx in range(len(redShirtSpeeds)):
		rider1 = redShirtSpeeds[idx]
		rider2 = blueShirtSpeeds[len(blueShirtSpeeds) - idx - 1]
		totalSpeed += max(rider1, rider2)
	return totalSpeed
def reverseArrayInPlace(array):
	start = 0
	end = len(array) - 1
	while start < end:
		array[start], array[end] = array[end], array[start]
		start += 1
		end -=1

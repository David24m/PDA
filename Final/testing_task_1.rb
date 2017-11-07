### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val #Add brackets to the variable
  if val = 1 #should be == not just =
  return true
  else
  return false
  end
end

dif max a b #should be def not dif and a & b need to be in brackets with a comma between them
  if a > b
      return a
  else
  b #add return to this line
  end
end
end #remove extra end

def looper
  for i in 1..10
  puts i #add indentation
  end#add in return i to get the result
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#Missing an end to close the function

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #should be max(100, 1) failed instead
  failrues = failures + 1 #Failures in mispelt
end


if failures #Failures doesn't equal anything so test will always fail
  puts "Test Failed"
else
  puts "Test Passed"
end

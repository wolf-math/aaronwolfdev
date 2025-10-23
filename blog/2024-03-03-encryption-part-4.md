---
slug: encryption4
title: "Encryption Part 4: Hashes"
authors: wolf
tags: [encryption, python]
---


:::note
This blog post was originally published on [dev.to](https://dev.to/wolfmath/series/22067)
:::


This is the final section of my series on encryption... at least for now. Maybe I'll think of some other topics to cover.

You can clone my [encryption demo repo](https://github.com/wolf-math/encryption-demo) and run the code from this article on your own machine.


## Intro to Hashing

Hashing is a one way function that's used in encryption scenarios where the goal is secure storage, data integrity, and verification. The original use that led to the creation of hashing functions was digital signatures. It's basically a function that creates a summary of the whole, but the whole cannot be extrapolated from the hash. 

<!-- truncate -->

Any website you've logged into with a password should be storing your password as a hash, meaning the maintainers of said website couldn't extrapolate your password even if they wanted to. It's just saved as a hash which is represented by a random string. When you log into the website your password is sent securely (over `HTTPS`) from your computer to the server where it is hashed and compared against the server's hash of the password. If they match, you get authenticated, if not, try again.

Hashing can also work to verify data. If you've ever downloaded a Linux `.iso` and the instructions tell you to run `sha256sum <linux_distro_of_your_choice>.iso`, the output will be a hash and it should match what the Linux website says, otherwise someone may have tampered with it or it could be corrupt. 

## Hashing algorithms

There are many different hashing algorithms that can be used, but most of them follow the same basic process. It is a mathematical function that takes a particular input (a password for instance) and converts it through some mathematical means into a digest, also sometimes referred to as tags or just hashes. 

There are a few commonalities that good hashing algorithms share:

1. **It's deterministic**: This means that an input will always result in the same output.
2. **Fixed length**: The input can be as large as the user wants, however, the output will always be a fixed length. For instance `sah256sum` always produces a hash that is 256 bits. 
3. **It's fast**, but also not too fast: It needs to be fast for performance, but if it's too fast that indicates that it's not performing enough computation to create a _good_ hash.
4. **The avalanche principal**: If even a single bit of data has changed, no matter where in the file, the resulting hash will be drastically different.
5. **Collision resistant**: Two inputs never create the same output. While there are an incredible number of possible hashes out there, there are still only a finite number of them. Therefore in the natural course of using a hash function it's possible that two files can create the same hash. However the function should be collision resistant enough that intentionally creating two files that generate the same hash is unlikely and virtually impossible. If this was possible, forging documents would be easy and that's bad. Due to their extensive use, and known collision resistance issues, there are a few hashing algorithms that are considered broken including SHA1 and MD5.

## Let's see SHA-1 in action

SHA stands for **S**ecure **H**ash **A**lgorithm, even though, ironically, it's no longer secure. What it does is it takes any size input and returns a 160 bit binary sequence. 

1. The message is padded to ensure its length is a multiple of 512 bits. Padding involves appending bits until it's a multiple of 512.
2. SHA-1 begins with five initial hash values of 32 bits each.
3. Each 512-bit block is broken down into sixteen 32-bit words.
4. These sixteen 32-bit words are expanded into eighty 32-bit words using certain operations.
5. SHA-1 uses a main loop that iterates 80 times for each block. In each iteration, a compression function is applied, which includes bitwise operations (AND, OR, XOR), conditional operations, and circular left shifts.
6. After processing each 512-bit block, the five hash values are updated. This involves adding the values computed in the main loop to the current hash values. For the first block, the initial hash values are used. For subsequent blocks, the updated hash values from the previous block are used.
7. After all blocks have been processed, the final hash value is produced by concatenating the five updated hash values.

## Python for SHA-1

Let's write some Python to create a SHA-1 hash. **Note** that as stated above SHA-1 is no longer considered safe. **Don't use it in production!!!** 

Using the hashlib library it's easy to generate a hash from a number of different algorithms. Feel free to try them all. Creating a hash function is beyond the scope of this write up.


```python
import hashlib

def sha1_hash(input_string):
    # Create a SHA-1 hash object
    hash_object = hashlib.sha1()

    hash_object.update(input_string.encode())

    # Get the hexadecimal representation of the hash
    hex_digest = hash_object.hexdigest()

    return hex_digest

```


```python
input_string = input('Enter a string to hash: ')
result = sha1_hash(input_string)

print(f"The SHA-1 hash of '{input_string}' is: {result}")

```
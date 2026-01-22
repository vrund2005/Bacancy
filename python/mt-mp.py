import threading
import multiprocessing
import time
import random

# --- The Heavy Task: Matrix Multiplication ---
def matrix_multiply(size):
    # Create two random matrices
    matrix_a = [[random.random() for _ in range(size)] for _ in range(size)]
    matrix_b = [[random.random() for _ in range(size)] for _ in range(size)]
    result = [[0] * size for _ in range(size)]

    # Perform multiplication (O(n^3) complexity - very heavy)
    for i in range(size):
        for j in range(size):
            for k in range(size):
                result[i][j] += matrix_a[i][k] * matrix_b[k][j]

# --- 1. Multithreading Approach ---
def run_multithreading(matrix_size):
    print("Starting Multithreading...")
    start_time = time.time()

    # Create 2 threads
    t1 = threading.Thread(target=matrix_multiply, args=(matrix_size,))
    t2 = threading.Thread(target=matrix_multiply, args=(matrix_size,))

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    end_time = time.time()
    print(f"Multithreading Time: {end_time - start_time:.4f} seconds")

# --- 2. Multiprocessing Approach ---
def run_multiprocessing(matrix_size):
    print("Starting Multiprocessing...")
    start_time = time.time()

    # Create 2 processes
    p1 = multiprocessing.Process(target=matrix_multiply, args=(matrix_size,))
    p2 = multiprocessing.Process(target=matrix_multiply, args=(matrix_size,))

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    end_time = time.time()
    print(f"Multiprocessing Time: {end_time - start_time:.4f} seconds")

if __name__ == "__main__":
    # Matrix size (e.g., 200x200). 
    # Warning: Increasing this number increases time exponentially!
    SIZE = 200

    print(f"--- Benchmark for {SIZE}x{SIZE} Matrix Multiplication ---\n")
    
    # Run Threading
    run_multithreading(SIZE)
    
    print("-" * 30)
    
    # Run Processing
    run_multiprocessing(SIZE)




# # Another example For multithreading

# def fetch_data(number):
#     print(f"Downloading file {number}...")
#     time.sleep(2)
#     print(f"file Downloaded succesfully{number}")

# threads = []
# start = time.time()

# for i in range(5):
#     t = threading.Thread(target=fetch_data, args=(i,))
#     threads.append(t)
#     t.start()

# for t in threads:
#     t.join()

# end = time.time()
# print("Time taken:", end - start)
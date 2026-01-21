# import threading
# import time

# def task():
#     for i in range(5):
#         print("Running")
#         time.sleep(1)

# t = threading.Thread(target=task)
# t.start()

# print("Main thread continues")
# print("Main thread continues")
# time.sleep(1)
# print("Main thread continues")
# print("Main thread continues")
# print("Main thread continues")
# print("Main thread continues")
# print("Main thread continues")
# print("Main thread continues")


# import asyncio

# async def task1():
#     print("1 Start")
#     await asyncio.sleep(2)
#     print("1 End")

# # asyncio.run(task())

# async def task2():
#     print("2 Start")
#     await asyncio.sleep(2)
#     print("2 End")

# async def main():
#     await asyncio.gather(task1(),task2())

# asyncio.run(main())

# import threading

# def count():
#     total = 0
#     for i in range(10_000_000):
#         total += 1
#     print(total)

# t1 = threading.Thread(target=count)
# t2 = threading.Thread(target=count)

# t1.start()
# t2.start()

# t1.join()
# t2.join()

# print("Done")

# import threading
# import time

# def download(file):
#     print(f"Downloading {file}")
#     time.sleep(2)
#     print(f"Finished {file}")

# files = ["a.mp4", "b.mp4", "c.mp4"]

# threads = []
# for f in files:
#     t = threading.Thread(target=download, args=(f,))
#     threads.append(t)
#     t.start()

# for t in threads:
#     t.join()

# print("All downloads complete")
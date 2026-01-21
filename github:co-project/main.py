import streamlit as st

from operations.substraction import subtract
from operations.addition import add
from operations.multiplication import multiply
from operations.division import divide

st.title("Modular Calculator")

# Layout for UI
col1, col2 = st.columns(2)
num1 = col1.number_input("First Number", value=0.0)
num2 = col2.number_input("Second Number", value=0.0)

st.write("### Choose Operation")
c1, c2, c3, c4 = st.columns(4)

# We use session state to show the result so it stays on screen
if "result" not in st.session_state:
    st.session_state.result = 0.0

if c1.button("➕"):
    st.session_state.result = add(num1, num2)

if c2.button("➖"):
    st.session_state.result = subtract(num1, num2)

if c3.button("✖️"):
    st.session_state.result = multiply(num1, num2)

if c4.button("➗"):
    if num2 != 0:
        st.session_state.result = divide(num1, num2)
    else:
        st.error("Cannot divide by zero!")

st.success(f"Result: {st.session_state.result}")
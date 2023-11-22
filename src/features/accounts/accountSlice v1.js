// const initialState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return;

//       return {
//         ...state,
//         loan: action.payload.ammount,
//         loanPurpose: action.payload.loanPurpose,
//         balance: state.balance + action.payload.ammount,
//       };
//     case "account/repayLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     default:
//       return state;
//   }
// }

// // ACTION CREATORS
// export function deposit(ammount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: ammount };
//   return async function (dispatch, getState) {
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${ammount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted });
//     // console.log(data);
//   };
// }

// export function withdrawl(ammount) {
//   return { type: "account/withdraw", payload: ammount };
// }

// export function requestLoan(loan, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { ammount: loan, loanPurpose: purpose },
//   };
// }

// export function repayLoan() {
//   return { type: "account/repayLoan" };
// }

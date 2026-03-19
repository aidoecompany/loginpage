import { supabase } from "./supabaseClient.js";

// ─────────────────────────────
// LOGIN
// ─────────────────────────────
window.handleLogin = async function () {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const errorBox = document.getElementById("loginError");
  errorBox.classList.remove("show");

  if (!email || !password) {
    errorBox.textContent = "Please fill in all fields.";
    errorBox.classList.add("show");
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    errorBox.textContent = error.message;
    errorBox.classList.add("show");
  } else {
    window.location.href = "https://dashboard2-0-black.vercel.app/";
  }
};

// ─────────────────────────────
// SIGNUP
// ─────────────────────────────
window.handleSignup = async function () {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  const errorBox = document.getElementById("signupError");
  const successBox = document.getElementById("signupSuccess");

  errorBox.classList.remove("show");
  successBox.classList.remove("show");

  if (!email || !password) {
    errorBox.textContent = "Please fill in all fields.";
    errorBox.classList.add("show");
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    errorBox.textContent = error.message;
    errorBox.classList.add("show");
  } else {
    successBox.textContent = "Check your email for verification link.";
    successBox.classList.add("show");
  }
};

// ─────────────────────────────
// FORGOT PASSWORD (STEP 1)
// ─────────────────────────────
window.handleForgotNext = async function () {
  const email = document.getElementById("forgotEmail").value.trim();
  const errorBox = document.getElementById("forgotEmailError");

  errorBox.classList.remove("show");

  if (!email) {
    errorBox.textContent = "Please enter your email.";
    errorBox.classList.add("show");
    return;
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://loginpage-pearl-one.vercel.app/",
  });

  if (error) {
    errorBox.textContent = error.message;
    errorBox.classList.add("show");
  } else {
    document.getElementById("otpEmailDisplay").textContent = email;
    showView("viewForgotOTP"); // keep your UI flow
  }
};

// ─────────────────────────────
// OTP VERIFY (FAKE → UI ONLY)
// ─────────────────────────────
window.handleOTPVerify = async function () {
  const successBox = document.getElementById("otpSuccess");

  successBox.textContent = "✓ Check your email to reset password.";
  successBox.classList.add("show");
};

// ─────────────────────────────
// RESEND EMAIL
// ─────────────────────────────
window.handleResendOTP = async function () {
  const email = document.getElementById("forgotEmail").value.trim();

  await supabase.auth.resetPasswordForEmail(email);

  const successBox = document.getElementById("otpSuccess");
  successBox.textContent = "✓ Reset email sent again.";
  successBox.classList.add("show");
};

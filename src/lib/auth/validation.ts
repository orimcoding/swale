export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthValidationResult {
  success: boolean;
  error?: string;
  credentials?: AuthCredentials;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function validateAuthCredentials(body: unknown): AuthValidationResult {
  if (!body || typeof body !== "object") {
    return {
      success: false,
      error: "Invalid request body",
    };
  }

  const { email, password } = body as Record<string, unknown>;

  if (typeof email !== "string" || email.trim().length === 0) {
    return {
      success: false,
      error: "Email is required",
    };
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return {
      success: false,
      error: "Invalid email format",
    };
  }

  if (typeof password !== "string" || password.length === 0) {
    return {
      success: false,
      error: "Password is required",
    };
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return {
      success: false,
      error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
    };
  }

  return {
    success: true,
    credentials: {
      email: email.trim().toLowerCase(),
      password,
    },
  };
}

// Explain which members should be accessible and why
public members should be accessible to allow interaction with the class's functionality,
while private members should be hidden to protect internal data and implementation details.
Protected members can be accessed by derived classes, allowing for extensibility while still maintaining encapsulation.

// Create a service class exposing only required public methods
// Keep internal data private
// Create a class with public, private, and protected members

class AuthService {
  public username: string;
  private password: string;
  protected sessionToken: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.sessionToken = "generated-token";
  }

  public login(): string {
    return `${this.username} logged in`;
  }

  private hashPassword(): string {
    return "hashed-" + this.password;
  }
}

// Try accessing them outside the class
// Which members should be exposed and why?
const authService = new AuthService("Vrund", "vrund765");
console.log(authService.username); // ✅ Public member accessible
console.log(authService.password); // ❌ Private member not accessible
console.log(authService.sessionToken); // ❌ Protected member not accessible outside class   
import { AxiosInstance } from 'axios';

type LoginDto = { email: string; password: string };
type SignupDto = { name: string; email: string; password: string };

export class AuthService {
  constructor(private client: AxiosInstance) {}

  async login(dto: LoginDto) {
    if (dto.password !== 'password') {
      throw new Error('Invalid credentials');
    }
    return {
      user: {
        id: '1',
        name: 'John Doe',
        email: dto.email,
      },
      token: 'static-token-123',
    };
  }

  async signup(dto: SignupDto) {
    return {
      user: {
        id: '2',
        name: dto.name,
        email: dto.email,
      },
      token: 'static-token-456',
    };
  }
}


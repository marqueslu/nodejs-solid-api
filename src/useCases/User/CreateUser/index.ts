import { MailtrapMailProvider } from "../../../providers/implementations/MailtrapMailProvider";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const usersRepository = new UsersRepository()


const createUSerUseCase = new CreateUserUseCase(
  usersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUSerUseCase
)

export { createUSerUseCase, createUserController }

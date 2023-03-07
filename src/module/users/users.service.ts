import { prismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: prismaService) {}

  findAll() {
    return this.prisma.users.findMany({
      include: {
        banks: true,
      },
    });
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: {
        name: createUserDto.name,
        age: createUserDto.age,
        banks: {
          connect: {
            id: createUserDto.banks,
          },
        },
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id
      },
      data: {
        name: updateUserDto.name,
        age: updateUserDto.age,
        banks: updateUserDto.banks as any
      }
    })
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: {
        id
      }
    })
  }
}

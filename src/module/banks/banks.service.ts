import { prismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Injectable()
export class BanksService {
  constructor(private readonly prisma: prismaService) {}

  async create(createBankDto: CreateBankDto): Promise<void> {
    await this.prisma.banks.create({
      data: {
        title: createBankDto.title,
        price: createBankDto.price,
        Users: {
          connect: {
            id: createBankDto.user,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.banks.findMany({
      include: {
        Users: true,
      },
    });
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return this.prisma.banks.update({
      where: {
        id
      },
      data: {
        title: updateBankDto.title,
        price: updateBankDto.price,
        Users: updateBankDto.user as any
      }
    });
  }

  remove(id: number) {
    return this.prisma.banks.delete({
      where: {
        id
      }
    })
  }
}

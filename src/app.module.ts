import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'; 
import { Aluno } from './alunos/aluno.entity.js';
import { evento } from './evento/evento.entity.js';
import { veiculo } from './veiculo/veiculo.entity.js';
import { livro } from './livro/livro.entity.js';
import { produto } from './produto/produto.entity.js';
import { modalidade } from './modalidade/modalidade.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      port: 3306,
      username: 'root',
      password:'12345678',
      database:'escola_db2',
      entities:[Aluno, evento, veiculo, livro, produto, modalidade],
      synchronize: true,
      logging: true,  
    }),
  ],
})
export class AppModule{}

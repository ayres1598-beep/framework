import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity('modalidade')

export class modalidade { 
    
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column({length: 100})
    nome!: string;

    @Column({ type:'text'})
    descricao!: string; 

    @Column({type:'int'})
    duracaoMistura!: number;

    @Column ({type:'decimal'})
    valorMensal!:number;

    @Column ({default:true})
    ativa!:boolean;
}
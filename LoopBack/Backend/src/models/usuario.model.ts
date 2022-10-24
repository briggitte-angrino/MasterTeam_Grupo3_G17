import {Entity, model, property, hasOne} from '@loopback/repository';
import {Roles} from './roles.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasOne(() => Roles)
  roles: Roles;

  @property({
    type: 'string',
  })
  inmuebleId?: string;

  @property({
    type: 'string',
  })
  solicitudesId?: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;

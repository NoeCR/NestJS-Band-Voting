import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Band } from '../classes/band.class';

export const createBandParam = createParamDecorator((data: unknown, context: ExecutionContext): Band => {
  const request = context.switchToHttp().getRequest();
  return Band.fromCreateBandDto(request.body);
});

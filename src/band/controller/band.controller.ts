import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Band } from '../classes/band.class';
import { createBandParam } from '../decorators/create_band.decorator';
import { CreateBandDto, CreateBandResponseDto } from '../dto/create_band.dto';

@ApiTags('Band')
@Controller('band')
export class BandController {
  constructor() {}

  @Post()
  @ApiOperation({ summary: 'Create band', description: 'Create new band into database' })
  @ApiBody({ type: CreateBandDto })
  @ApiOkResponse({ type: CreateBandResponseDto })
  async createBand(@createBandParam() band: Band): Promise<CreateBandResponseDto> {
    console.log(band);
    // TODO: check that the band name does not exist
    // TODO: Implement logic to store in database
    return Promise.resolve(new CreateBandResponseDto());
  }
}

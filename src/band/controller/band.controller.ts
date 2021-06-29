import { BandStatus } from '@common/enum/band-status';
import { MongodbSort } from '@common/enum/mongodb-sort';
import { BandService } from '@common/services/band/band.service';
import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Band } from '../classes/band.class';
import { createBandParam } from '../decorators/create_band.decorator';
import { BandResponseDto } from '../dto/band_response.dto';
import { CreateBandDto } from '../dto/create_band.dto';
import { UpdateBandDto } from '../dto/update_band.dto';

@ApiTags('Band')
@Controller('band')
export class BandController {
  constructor(
    private readonly bandService: BandService
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create band', description: 'Create new band into database' })
  @ApiBody({ type: CreateBandDto })
  @ApiOkResponse({ type: BandResponseDto })
  async createBand(@createBandParam() band: Band): Promise<BandResponseDto> {
    return this.bandService.createBand(band);
  }

  @Get('/')
  @ApiOperation({
    summary: 'Get all bands',
    description: 'Recover the bands that are active'
  })
  @ApiOkResponse({ type: [BandResponseDto] })
  async getBands(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(25), ParseIntPipe) limit: number,
    @Query('sort' new DefaultValuePipe(MongodbSort.Ascendent)) sort: MongodbSort,
    @Query('bandStatus') bandStatus: BandStatus[],
  ): Promise<BandResponseDto[]> {
    return await this.bandService.getAllBands(page, limit, sort, bandStatus);
  }

  @Put('/:bandId')
  @ApiOperation({
    summary: 'Update band',
    description: 'Update the votes of a certain band'
  })
  @ApiBody({ type: UpdateBandDto })
  @ApiOkResponse({ type: BandResponseDto })
  async updateBand(
    @Param('bandId') bandId: string,
    @Body() updateBand: UpdateBandDto
  ): Promise<BandResponseDto> {
    return this.bandService.updateBand(bandId, updateBand);
  }

  @Delete('/:bandId')
  @ApiOperation({
    summary: 'Delete a band',
    description: 'Delete a band so that it is completely inaccessible'
  })
  @ApiOkResponse({ type: BandResponseDto })
  async deleteBand(@Param('bandId') bandId: string): Promise<Band> {
    return this.bandService.deleteBand(bandId);
  }
}

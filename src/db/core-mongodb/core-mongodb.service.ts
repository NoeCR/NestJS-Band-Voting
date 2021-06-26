import { Model, Document, MongooseFilterQuery } from 'mongoose';

export class CoreMongodbService<T extends Document> {
  protected defaultProjection = { __v: false };

  constructor(protected model: Model<T>) { }

  document<Z>(input?: Z): T {
    return new this.model(input);
  }

  insert<Z>(input: Z): Promise<T> {
    const created = new this.model(input);
    created.save();
    return created.toObject();
  }

  find(filter: MongooseFilterQuery<unknown>): Promise<T[]> {
    return this.model.find(filter).select(this.defaultProjection).exec();
  }

  findOneAndUpdate(
    filter: MongooseFilterQuery<unknown>,
    update: MongooseFilterQuery<unknown>,
    opts: MongooseFilterQuery<unknown> = {},
  ): Promise<T> {
    return this.model.findOneAndUpdate(filter, update, opts).select(this.defaultProjection).exec();
  }

  paginate(sort: number, offset: number, limit: number, filter: MongooseFilterQuery<unknown>): Promise<T[]> {
    return this.model
      .find(filter)
      .sort({ createdAt: sort })
      .skip(offset > 0 ? (offset - 1) * limit : 0)
      .limit(limit)
      .select(this.defaultProjection)
      .exec();
  }

  async findOne(filter: MongooseFilterQuery<unknown>): Promise<T> {
    const result = await this.model.find(filter).select(this.defaultProjection).exec();
    return result.length === 1 ? result[0] : null;
  }
}

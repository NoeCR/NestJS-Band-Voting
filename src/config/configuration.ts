export enum CONFIG {
  SERVICE_NAME = 'serviceName',
  SERVICE_DESCRIPTION = 'serviceDescription',
  SERVICE_VERSION = 'serviceVersion',
}

export interface ServiceConfiguration {
  serviceName: string;
  serviceDescription: string;
  serviceVersion: string;
}

export default (): ServiceConfiguration => {
  return {
    serviceName: process.env.SERVICE_NAME,
    serviceDescription: process.env.SERVICE_DESCRIPTION,
    serviceVersion: process.env.SERVICE_VERSION,
  };
};

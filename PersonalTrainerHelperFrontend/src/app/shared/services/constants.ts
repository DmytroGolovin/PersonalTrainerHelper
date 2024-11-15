import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
  public api = {
    home: 'api',
    clients: {
      root: 'clients'
    },
    exercises: {
      root: 'exercises',
      storagePath: 'exercises/'
    },
    plans: {
      root: 'plans',
    },
    workouts: {
      root: 'workouts',
    }
  }

  public commonConfigs = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50]
  };

  // Configs for datepickers
  public dateTimeFormat = "dd.MM.yyyy";
}
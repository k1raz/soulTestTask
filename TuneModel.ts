import { ModType } from './ModTypes';

export class TunningModel {
    private _modType: ModType;
    private _modIndex: number;

    constructor(modType: ModType, modIndex: number) {
        this._modType = modType;
        this._modIndex = modIndex;
    }

    public apply(vehicle: VehicleMp): void {
        vehicle.setMod(this._modType, this._modIndex);
    }
}
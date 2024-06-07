import { BaseEventHandler } from '../../../../shared/BaseEvents/BaseEventHandler';
import { BaseDevCommand } from '../../utils/devTools/BaseDevCommand';
import { ModType } from './ModTypes';
import { TunningModel } from './TuneModel';
import { CommandManager } from '../../Commands/CommandManager';
import { number } from 'mathjs';

export class Tunning {
    constructor() {
        mp.events.addCommand({
            'newVeh': this.createVehicle.bind(this),
            'tunning': this.tunning.bind(this)
        });
    }

    public createVehicle(player: PlayerMp, vehName: string): void {
        mp.vehicles.new(mp.joaat(vehName), player.position, {
            engine: true,
            numberPlate: `${player.name}`,
            color: [[0, 255, 0], [0, 255, 0]],
            dimension: player.dimension,
        });

    }

    public tunning(player: PlayerMp, fulltext: string): void {
        if (!player.vehicle)
            return;

        const [modType, modIndex] = fulltext.split(', ');
        new TunningModel(Number(modType) as ModType, Number(modIndex)).apply(player.vehicle);
    }
}

const tunning = new Tunning();
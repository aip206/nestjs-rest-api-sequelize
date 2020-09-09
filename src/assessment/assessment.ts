
export class Assessment {
     private response: string;


     constructor(partial: Partial<Assessment>) {
          Object.assign(this, partial);
     }
}
export interface Building {
  attributes: {
    EIG_KL_ST: number;
    FOLIE: string;
    OAR: string;
    Kachel: string;
    TexVersion: number;
    RBEZ: string;
    Address: {
      HouseNumber: string;
      Street: string;
      City: string;
    };
    GMDE: string;
    roofType: string;
    LAND: string;
    H_First_Max: number;
    H_Trauf_Min: number;
    EIG_KL_PV: number;
    LFD: string;
    creationDate: string;
    HNR: string;
    KREIS: string;
    'externalReference externalObjectName': string;
    STR: string;
    measuredHeight: number;
    function: string;
    H_Trauf_Max: number;
    H_First_Min: number;
  };
}

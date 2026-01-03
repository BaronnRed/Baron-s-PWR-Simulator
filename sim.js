
const Registry = {
    BLOCKS: {
        0: { name: "Air", texture: "air.png", color: "transparent"},
        1: { name: "Reactor Casing", texture: "textures/pwr_casing.png"},
        2: { name: "Fuel Rod", texture: "textures/pwr_fuel_top.png"},
        3: { name: "Control Rod", texture: "textures/pwr_control_top.png"},
        4: { name: "Coolant Channel", texture: "textures/pwr_channel_top.png"},
        5: { name: "Heat Exchanger", texture: "textures/pwr_heatex.png"},
        6: { name: "Neutron Reflector", texture: "textures/pwr_reflector.png"},
        7: { name: "Neutron Source", texture: "textures/pwr_neutron_source.png"},
        8: { name: "Controller", texture: "textures/pwr_controller.png"},
        9: { name: "Heat Sink", texture: "textures/pwr_heatsink.png"}
    },
    
    FUELS: {
        0: { name: "MEU",         heatPerFlux: 5.0,   reactionType: "log",  constant: 20.0,     readableFunc: "log(x / 2500 + 1) * 20 * 30",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.meu.png"},
        1: { name: "HEU233",      heatPerFlux: 7.5,   reactionType: "sqrt", constant: 25.0,   readableFunc: "sqrt(x * 25.0)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.heu233.png"},
        2: { name: "HEU235",      heatPerFlux: 7.5,   reactionType: "sqrt", constant: 22.5,     readableFunc: "sqrt(x * 22.5)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.heu235.png"},
        3: { name: "MEN",         heatPerFlux: 7.5,   reactionType: "log",  constant: 22.5,     readableFunc: "log(x / 2500 + 1) * 22.5 * 30",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.men.png"},
        4: { name: "HEN237",      heatPerFlux: 7.5,   reactionType: "sqrt", constant: 27.5,     readableFunc: "sqrt(x * 27.5)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hen237.png"},
        5: { name: "MOX",         heatPerFlux: 7.5,   reactionType: "log",  constant: 20.0,     readableFunc: "log(x / 2500 + 1) * 20 * 30",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.mox.png"},
        6: { name: "MEP",         heatPerFlux: 7.5,   reactionType: "log",  constant: 22.5,     readableFunc: "log(x / 2500 + 1) * 22.5 * 30",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.mep.png"},
        7: { name: "HEP239",      heatPerFlux: 10.0,  reactionType: "sqrt", constant: 22.5,     readableFunc: "sqrt(x * 22.5)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hep239.png"},
        8: { name: "HEP241",      heatPerFlux: 10.0,  reactionType: "sqrt", constant: 25.0,     readableFunc: "sqrt(x * 25.0)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hep241.png"},
        9: { name: "MEA",         heatPerFlux: 7.5,   reactionType: "log",  constant: 25.0,     readableFunc: "log(x / 2500 + 1) * 25 * 30",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.mea.png"},
        10: { name: "HEA242",     heatPerFlux: 10.0,  reactionType: "sqrt", constant: 25.0,     readableFunc: "sqrt(x * 25.0)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hea242.png"},
        11: { name: "HES326",     heatPerFlux: 12.5,  reactionType: "sqrt", constant: 27.5,     readableFunc: "sqrt(x * 27.5)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hes326.png"},
        12: { name: "HES327",     heatPerFlux: 12.5,  reactionType: "sqrt", constant: 30.0,     readableFunc: "sqrt(x * 30)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.hes327.png"},
        13: { name: "BFB_AM_MIX", heatPerFlux: 2.5,   reactionType: "sqrt", constant: 15.0,     readableFunc: "sqrt(x * 15)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.bfb_am_mix.png"},
        14: { name: "BFB_PU241",  heatPerFlux: 2.5,   reactionType: "sqrt", constant: 15.0,     readableFunc: "sqrt(x * 15)",
        texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/items/pwr_fuel.bfb_pu241.png"},

    },
    //heatCap: total heat capacity per mB, heatEff: TU used to heat / TU recoved when cooled at HE, coolEff: how fast it sucks the heat out of the core, fluxMult: neutron flux multiplier
    COOLANTS: {
        0: { name: "Coolant",         heatCap: 300,  heatEff: 1.0, coolEff: 1.0, fluxMult: 1.0,     color: "rgba(72, 139, 146, 0.6)",   texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/coolant.png" },
        1: { name: "Perfluoromethyl", heatCap: 300,  heatEff: 1.0, coolEff: 1.0, fluxMult: 1.0,     color: "rgba(90, 95, 105, 0.6)",    texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/perfluoromethyl.png" },
        2: { name: "Mug Root Beer",   heatCap: 400,  heatEff: 1.0, coolEff: 1.0, fluxMult: 1.15,    color: "rgba(100, 50, 20, 0.6)",    texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/mug.png" },
        3: { name: "Heavy Water",     heatCap: 300,  heatEff: 1.0, coolEff: 1.0, fluxMult: 1.25,    color: "rgba(44, 85, 105, 0.6)",    texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/heavywater.png" },
        4: { name: "Liquid Sodium",   heatCap: 400,  heatEff: 1.0, coolEff: 2.5, fluxMult: 1.0,     color: "rgba(204, 213, 213, 0.6)",  texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/sodium.png" },
        5: { name: "Liquid Lead",     heatCap: 800,  heatEff: 0.85,coolEff: 0.75, fluxMult: 0.75,   color: "rgba(62, 62, 74, 0.6)",  texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/lead.png" },
        6: { name: "Thorium Salt",    heatCap: 400,  heatEff: 1.0, coolEff: 1.0, fluxMult: 2.5,     color: "rgba(106, 69, 49, 0.6)",  texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/thorium_salt.png" }

    }
};

const Reactor = {
    size: 7,
    layers: [], 
    TANK_CAPACITY: 128000,

    // Simulation State
    stats: {
        maxHeat: 10000000,
        flux: 0,                // Current Flux (Result of previous tick)
        baseFlux: 0,            // From Neutron Sources (Constant)
        fluxPerRod: 0,
        rodCount: 0,
        controlInsertion: 0,  // Target
        rodLevel: 0,        // Current
        selectedFuel: 0,
        fuelLoadedAmount: 0,
        fuelDensity: 0,         // Fuel per rod
        coreHeat: 0,
        hullHeat: 0,
        selectedCoolant: 0,
        coolantAmount: 0,
        hotCoolantAmount: 0,        

        // Structural Analysis Data (Calculated once per build change)
        struct: {
            rodCount: 0,
            sourceCount: 0,
            heatexCount: 0,
            effectiveHeatsinkCount: 0,
            heatsinkCount: 0,
            channelCount: 0,
            rawConnections: 0,       // Uncontrolled connections (Fuel=1, Reflector=2)
            controlledConnections: 0 // Controlled connections (touching control rod)
        },

        fluidio: {
        autoInput: false,   
        matchOutput: false, 
        inputRate: 0,       
        outputRate: 0,     
        usage: 0           
        },
    },

    iter2D(layerIndex, callback) {
        if (!this.layers[layerIndex]) return;
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                callback(x, y, this.layers[layerIndex][y][x]);
            }
        }
    },

    iter3D(callback) {
        for (let z = 0; z < this.layers.length; z++) {
            this.iter2D(z, (x, y, id) => callback(x, y, z, id));
        }
    },

    init(size) {
        this.size = size;
        this.layers = [];
        this.addLayer();
        this.hardReset();

    },

    hardReset() {
        this.resetSimulation();
        this.stats.fuelLoadedAmount = 0;
        this.stats.fuelDensity = 0;
        this.stats.controlInsertion = 0;
        this.stats.rodLevel = 0;
        document.getElementById('tick-per-second').value = 20;

        this.stats.struct = { 
            rodCount:0, sourceCount:0, heatexCount:0, heatsinkCount:0, channelCount:0, 
            rawConnections:0, controlledConnections:0 
        };

        this.stats.fluidio = {
            autoInput: false,   // Infinite Source Mode
            matchOutput: false, // Output = Input
            inputRate: 0,       // mB/t added
            outputRate: 0,      // mB/t removed
            usage: 0            // Calculated demand for display
        };
    },

    resetSimulation() {
        this.stats.coreHeat = 0;
        this.stats.hullHeat = 0;
        this.stats.flux = 0;

        this.stats.coolantAmount = 0;
        this.stats.hotCoolantAmount = 0;
        
        this.stats.rodLevel = this.stats.controlInsertion;

    },

    addLayer() {
        const layer = [];
        for(let y=0; y<this.size; y++) {
            layer.push(new Array(this.size).fill(0)); // 0 = Air
        }
        this.layers.push(layer);
        UI.renderViewport();
    },

    duplicateLayer(index) {
        if(index < 0 || index >= this.layers.length) return;
        const newLayer = this.layers[index].map(row => [...row]);
        this.layers.splice(index + 1, 0, newLayer);
        UI.renderViewport();
    },

    removeLayer(index) {
        if(this.layers.length <= 1) return;
        this.layers.splice(index, 1);
        UI.renderViewport();
    },

    clearLayer(index) {
    this.fillLayer(index, 0);
    },

    fillLayer(index, blockId) {
    this.iter2D(index, (x, y) => {
        this.layers[index][y][x] = blockId;
    });
    UI.updateLayerDOM(index);
    },

    borderLayer(index, blockId) {
        const s = this.size;
        this.iter2D(index, (x, y) => {
            // Check if we are on any edge
            if (x === 0 || x === s - 1 || y === 0 || y === s - 1) {
                this.layers[index][y][x] = blockId;
            }
        });
        UI.updateLayerDOM(index);
    },

    setBlock(z, x, y, id) {
        if(this.layers[z] && this.layers[z][y] !== undefined) {
            this.layers[z][y][x] = id;
            return true;
        }
        return false;
    },

    // Get block safely
    getBlock(x, y, z) {
        if (z < 0 || z >= this.layers.length) return 0;
        if (y < 0 || y >= this.size) return 0;
        if (x < 0 || x >= this.size) return 0;
        return this.layers[z][y][x];
    }
};

const Simulation = {
    intervalId: null,
    ticks: 0,

    start() {
        if(this.intervalId) return;

        const errorSpan = document.getElementById('header-error-msg');
        if(errorSpan) errorSpan.innerText = "";
        Reactor.resetSimulation();
        const error = this.validateStructure();
        if (error) {
            this.triggerError(error);
            return;
        }
        UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
        UI.setSimulationLock(true);
        UI.updateToggleBtn(true);
        const tpsInput = document.getElementById('tick-per-second');
        if (tpsInput.value > 100) tpsInput.value = 100;
        if (tpsInput.value < 1) tpsInput.value = 1;

        this.intervalId = setInterval(() => this.tick(), tpsInput ? 1000/parseInt(tpsInput.value) || 50 : 50); 

    },

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        UI.setSimulationLock(false);
        UI.updateToggleBtn(false);
    },

    triggerError(msg) {
        this.stop();
        const errorSpan = document.getElementById('header-error-msg');
        if(errorSpan) {
            errorSpan.innerText = msg;
        }
    },

    getXOverE(x, d) {
        return 1 - Math.exp(-x / d);
    },

    connectionFunc(c) {
        return (c / 10.0) * (1.0 - this.getXOverE(c, 300.0)) + (c / 150.0) * this.getXOverE(c, 300.0);
    },

    analyzeStructure() {
        const Struct = Reactor.stats.struct;
        
        // Reset counts
        Struct.rodCount = 0; Struct.sourceCount = 0; 
        Struct.heatexCount = 0; Struct.heatsinkCount = 0; 
        Struct.channelCount = 0;
        
        // Simple linear scan (No BFS, No Raycasting)
        Reactor.iter3D((x, y, z, id) => {
            if(id === 2) Struct.rodCount++; 
            if(id === 7) Struct.sourceCount++;
            if(id === 5) Struct.heatexCount++;
            if(id === 9) Struct.heatsinkCount++;
            if(id === 4) Struct.channelCount++;
        });

        // We do NOT calculate connections or check leaks here.
        // This keeps the editor buttery smooth.
        return null; 
    },

    validateStructure() {
        const Struct = Reactor.stats.struct;
        const MAX_SIZE = 4096;

        Struct.rodCount = 0; Struct.sourceCount = 0; Struct.heatexCount = 0; 
        Struct.heatsinkCount = 0; Struct.channelCount = 0;
        Struct.rawConnections = 0; Struct.controlledConnections = 0;

        let controllerPos = null;
        let controllerCount = 0;
        Reactor.iter3D((x, y, z, id) => {
            if (id === 8) { controllerPos = {x, y, z}; controllerCount++;}
        });

        if (controllerCount === 0) return "Error: No Controller found.";
        if (controllerCount > 1) return "Error: Multiple Controllers found.";

        const isCore = (id) => [2, 3, 4, 5, 7, 9].includes(id);
        const isHull = (id) => [1, 6, 8].includes(id);

        // --- Flood Fill (BFS) ---
         const directions = [ 
            {x:1,y:0,z:0}, {x:-1,y:0,z:0},
            {x:0,y:1,z:0}, {x:0,y:-1,z:0},
            {x:0,y:0,z:1}, {x:0,y:0,z:-1}
        ];

        let queue = [];
        let visited = new Set();
        let fuelRods = [];



        visited.add(`${controllerPos.x},${controllerPos.y},${controllerPos.z}`);

        for (let dir of directions) {
            let nx = controllerPos.x + dir.x;
            let ny = controllerPos.y + dir.y;
            let nz = controllerPos.z + dir.z;
            let nid = Reactor.getBlock(nx, ny, nz);
    
            if (isCore(nid)) {
            if (dir.z !== 0) return "Error: Controller must be on the side.";
            let key = `${nx},${ny},${nz}`;
            visited.add(key);
            queue.push({x: nx, y: ny, z: nz});
            }       
        }
        
        if (queue.length === 0) return "Error: Controller disconnected from core.";

        while (queue.length > 0) {
            if (visited.size > MAX_SIZE) {return `Error: Reactor exceeds block limit. (Max ${MAX_SIZE} blocks)`;}

            let curr = queue.shift();

            let cid = Reactor.getBlock(curr.x, curr.y, curr.z);

            if(cid === 2) { Struct.rodCount++; fuelRods.push(curr); }
            if(cid === 7) Struct.sourceCount++;
            if(cid === 5) Struct.heatexCount++;
            if(cid === 9) Struct.heatsinkCount++;
            if(cid === 4) Struct.channelCount++;

            for (let dir of directions) {
                let nx = curr.x + dir.x;
                let ny = curr.y + dir.y;
                let nz = curr.z + dir.z;
                let key = `${nx},${ny},${nz}`;
            
                if (visited.has(key)) continue;
                let nid = Reactor.getBlock(nx, ny, nz);

                if (nid === 0) return `Error: Leak at X:${nx}, Y:${ny}, Layer:${nz+1}`;

                if (isHull(nid)) {
                    visited.add(key);
                }
                else if (isCore(nid)) {
                    visited.add(key);
                    queue.push({x: nx, y: ny, z: nz});

                }
            }
        }   
        
        if (Struct.rodCount === 0) return "Error: Fuel rods required";
        if (Struct.sourceCount === 0) return "Error: Neutron sources required";

        let connectionsDouble = 0;
        let connectionsControlledDouble = 0;
    
        for (let rod of fuelRods) {
            
            for (let dir of directions) {
                let controlled = false;
    
                for (let i = 1; i < 16; i++) {
                    let nx = rod.x + (dir.x * i);
                    let ny = rod.y + (dir.y * i);
                    let nz = rod.z + (dir.z * i);
                    let atPos = Reactor.getBlock(nx, ny, nz);
    
                    if (atPos === 0 || atPos === 1 || atPos === 8) break; 
                    if (atPos === 3) controlled = true; // pwr_control
    
                    if (atPos === 2) { // pwr_fuel
                        if (controlled) connectionsControlledDouble++;
                        else connectionsDouble++;
                        break;
                    }
    
                    if (atPos === 6) { // pwr_reflector
                        if (controlled) connectionsControlledDouble += 2;
                        else connectionsDouble += 2;
                        break;
                    }
                }
            }
        }

        Struct.rawConnections = connectionsDouble / 2;
        Struct.controlledConnections = connectionsControlledDouble / 2;
        Struct.effectiveHeatsinkCount = Math.min(Struct.heatsinkCount, 80);
        Reactor.stats.maxHeat = 10000000 + (Struct.effectiveHeatsinkCount * 500000);
        Reactor.stats.baseFlux = Struct.sourceCount * 20;
        
        UI.updateStats();

        return null;
    },

    squirt(x) { //2nd funniest German joke after the rodlevel
        return Math.sqrt(x + 1.0 / ((x + 2.0) * (x + 2.0))) - 1.0 / (x + 2.0);
    },

tick() {
    const S = Reactor.stats;
    const F = Reactor.stats.fluidio;
    const Struct = S.struct;
    
    // --- 1. ROD MOVEMENT with Inertia ---
    let targetLevel = S.controlInsertion;
    let diff = S.rodLevel - targetLevel;

    if(diff < 1 && diff > -1) {
        S.rodLevel = targetLevel;
    } else if(targetLevel > S.rodLevel) {
        S.rodLevel++;
    } else if(targetLevel < S.rodLevel) {
        S.rodLevel--;
    }

    // --- 2. CALCULATE FLUX ---
    let amountLoaded = S.fuelLoadedAmount || 0;
    if(amountLoaded > Struct.rodCount) amountLoaded = Struct.rodCount;

    // Java: (1D - (this.rodLevel / 100D))
    // Except in GUI: this.field.setText((100 - controller.rodTarget) + "");
    // Fucking mental
    let rodFactor = S.rodLevel / 100.0;

    let totalConnections = Struct.rawConnections + (Struct.controlledConnections * rodFactor); 
    let structureMult = this.connectionFunc(totalConnections); //getTotalProcessMultiplier(), or usedRods

    let modMult = 1.0;
    if(S.selectedCoolant && S.coolantAmount > 0) {
        modMult = S.selectedCoolant.fluxMult || 1.0;
    }

    let newFlux = S.baseFlux;
    const fuel = S.selectedFuel;
    if(!fuel) { this.triggerError("No fuel selected"); return false; };

    if (amountLoaded > 0) {

        S.fluxPerRod = S.flux / Struct.rodCount;
        let outputPerRod = 0.0;

        if (fuel.reactionType === "sqrt") {
            outputPerRod = this.squirt(S.fluxPerRod) * fuel.constant;
        } else {
            // Formula: log10(fluxPerRod / 2500 + 1) * constant * 30
            outputPerRod = Math.log10(S.fluxPerRod / 2500.0 + 1.0) * fuel.constant * 30.0;            
            }

        let totalOutput = outputPerRod * amountLoaded * structureMult;
        let totalHeatOutput = totalOutput * fuel.heatPerFlux;

        S.coreHeat = Math.trunc(S.coreHeat + totalHeatOutput);
        newFlux = Math.trunc(newFlux + totalOutput);
        // --- 3. FUEL DEPLETION (Future Implementation) ---
        }

    // --- 4. CORE <-> HULL THERMAL TRANSFER ---
    let rodCountForCoolant = Struct.rodCount + Math.ceil(Struct.effectiveHeatsinkCount / 4.0);
    if(rodCountForCoolant < 1) rodCountForCoolant = 1;

    // Java: getXOverE((heatexCount * 5) / rodCountForCoolant, 2) / 2
    let coreCoolingApproachNum = this.getXOverE((Struct.heatexCount * 5.0) / rodCountForCoolant, 2.0) / 2.0;

    let averageCoreHeat = Math.trunc((S.coreHeat + S.hullHeat) / 2);
    S.coreHeat -= Math.trunc((S.coreHeat - averageCoreHeat) * coreCoolingApproachNum);
    S.hullHeat -= Math.trunc((S.hullHeat - averageCoreHeat) * coreCoolingApproachNum);

    // --- 5. COOLANT SYSTEM ---
    if(S.selectedCoolant) {
        const trait = S.selectedCoolant;

        let coolingEff = (Struct.channelCount / rodCountForCoolant) * 0.1;
        if(coolingEff > 1.0) coolingEff = 1.0;

        // Strict integer emulation for heat calculation
        let efficientHeat = S.hullHeat * coolingEff * (trait.heatEff || 1.0);
        let heatToUse = Math.min(S.hullHeat, efficientHeat);
        
        // Java Cap: 2,000,000,000 (Integer Max roughly)
        if (heatToUse > 2000000000) heatToUse = 2000000000; 
        
        // Use Math.floor to simulate integer truncation during division
        let heatPerMB = trait.heatCap || 300; 

        let heatCycles = Math.floor(heatToUse / heatPerMB); // how much coolant would it take to absorb this heat
        let coolCycles = F.autoInput ? Reactor.TANK_CAPACITY : Math.max(Math.floor(S.coolantAmount), F.inputRate);
        let spaceInHot = Math.floor(Reactor.TANK_CAPACITY - S.hotCoolantAmount); // how much coolant would fit in the hot tank

        F.usage = Math.min(coolCycles, spaceInHot, heatCycles);

        if(F.autoInput) {
            S.coolantAmount = Reactor.TANK_CAPACITY;
            S.hotCoolantAmount = 0;
            F.inputRate = F.usage;
        }
        
        if(F.usage > 0) {
            S.hullHeat -= (heatPerMB * F.usage);
            S.coolantAmount -= F.usage;
            S.hotCoolantAmount += F.usage;
        }
        S.coolantAmount += F.inputRate;
        S.hotCoolantAmount -= F.outputRate;
        if(S.coolantAmount < 0) S.coolantAmount = 0;
        if(S.hotCoolantAmount < 0) S.hotCoolantAmount = 0;
        if(S.coolantAmount > Reactor.TANK_CAPACITY) S.coolantAmount = Reactor.TANK_CAPACITY;
        if(S.hotCoolantAmount > Reactor.TANK_CAPACITY) S.hotCoolantAmount = Reactor.TANK_CAPACITY;


    }

    // Passive Decay (Java: 0.999D)
    S.coreHeat = Math.trunc(S.coreHeat * 0.999);
    S.hullHeat = Math.trunc(S.hullHeat * 0.999);

    S.flux = newFlux;

    // --- 7. SAFETY ---
    if (S.coreHeat >= S.maxHeat) { // If hull exceeds max heat, core must also exceed it, therefore we only check core
        S.coreHeat = 0;
        S.hullHeat = 0;
        this.triggerError("MELTDOWN");
        return false;
    }

    this.ticks++;
    UI.updateStats();

    const multDisplay = document.getElementById('val-struct-mult');
    if(multDisplay) multDisplay.innerText = structureMult.toFixed(3) + "x";
},

    toggle() {
        if(this.intervalId) this.stop();
        else this.start();
    }
};


const IO = {

    // 1. LZW COMPRESSION (The Logic)

    compressLZW(uncompressed) {
        let dict = {};
        for (let i = 0; i < 20; i++) dict[i] = i; 
        
        let w = "";
        let result = [];
        let nextCode = 20;

        for (let i = 0; i < uncompressed.length; i++) {
            let c = uncompressed[i];
            let wc = w !== "" ? w + "," + c : String(c);
            
            if (dict.hasOwnProperty(wc)) {
                w = wc;
            } else {
                result.push(dict[w]);
                dict[wc] = nextCode++;
                w = String(c);
            }
        }
        if (w !== "") result.push(dict[w]);
        return result;
    },

    decompressLZW(compressed) {
        let dict = {};
        for (let i = 0; i < 20; i++) dict[i] = [i];
        
        let w = [compressed[0]];
        let result = [w[0]];
        let nextCode = 20;

        for (let i = 1; i < compressed.length; i++) {
            let k = compressed[i];
            let entry;

            if (dict[k]) {
                entry = dict[k];
            } else {
                if (k === nextCode) {
                    entry = w.concat([w[0]]);
                } else {
                    throw new Error("Corrupted LZW Data");
                }
            }

            result.push(...entry);
            dict[nextCode++] = w.concat([entry[0]]);
            w = entry;
        }
        return result;
    },

    toBase64(codes) {
        const bytes = new Uint8Array(codes.length * 2);
        for (let i = 0; i < codes.length; i++) {
            const code = codes[i];
            bytes[i * 2] = (code >> 8) & 0xFF; 
            bytes[i * 2 + 1] = code & 0xFF;    
        }
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    },

    fromBase64(base64) {
        // Safety check for empty strings
        if (!base64) return [];
        const binary = window.atob(base64);
        const len = binary.length;
        const codes = [];
        for (let i = 0; i < len; i += 2) {
            const high = binary.charCodeAt(i);
            const low = binary.charCodeAt(i + 1);
            codes.push((high << 8) | low);
        }
        return codes;
    },


    // 2. EXPORT FUNCTION

    exportReactor() {
        const S = Reactor.stats;
        const F = S.fluidio;
        const flatGrid = Reactor.layers.flat(2);

        // Compress Grid
        const compressedGrid = this.compressLZW(flatGrid);
        const gridString = this.toBase64(compressedGrid);

        // Get TPS
        const tpsInput = document.getElementById('tick-per-second');
        const tpsVal = tpsInput ? parseInt(tpsInput.value) : 20;

        const data = {
            v: 2, // Bumped Version
            s: Reactor.size,
            
            // Core Components
            fT: S.selectedFuel ? Object.keys(Registry.FUELS).find(key => Registry.FUELS[key] === S.selectedFuel) : 0,
            fA: S.fuelLoadedAmount || 0,
            cT: S.selectedCoolant ? Object.keys(Registry.COOLANTS).find(key => Registry.COOLANTS[key] === S.selectedCoolant) : 0,
            cR: Math.round(S.controlInsertion), 
            
            // Grid
            g: gridString,

            // New: Tanks
            tC: Math.floor(S.coolantAmount),      // Tank Cold
            tH: Math.floor(S.hotCoolantAmount),   // Tank Hot

            // New: Fluid IO Settings
            iR: F.inputRate,
            oR: F.outputRate,
            aI: F.autoInput ? 1 : 0,    // 1 = Checked, 0 = Unchecked
            mO: F.matchOutput ? 1 : 0,
            
            // New: Simulation Settings
            tps: tpsVal
        };

        try {
            const json = JSON.stringify(data);
            const code = btoa(json);
            
            navigator.clipboard.writeText(code).then(() => {
                const btn = document.getElementById('btn-export');
                if(!btn) return;

                if (!btn.dataset.originalText) btn.dataset.originalText = btn.innerText;
                if (btn.dataset.timer) clearTimeout(parseInt(btn.dataset.timer));

                btn.innerText = "Copied!";
                btn.style.borderColor = "#55ff55";
                btn.style.color = "#55ff55";

                const timerId = setTimeout(() => {
                    btn.innerText = btn.dataset.originalText;
                    btn.style.borderColor = "";
                    btn.style.color = "";
                    delete btn.dataset.originalText;
                    delete btn.dataset.timer;
                }, 2000);
                btn.dataset.timer = timerId;
            });
        } catch (e) {
            console.error(e);
            document.getElementById('header-error-msg').innerText = "Export Failed: " + e.message;
        }
    },


    // 3. UI HANDLERS

    openImportModal() {
        const modal = document.getElementById('import-modal');
        const input = document.getElementById('inp-import-code');
        if(!modal || !input) return;

        input.value = ""; 
        modal.showModal();
        setTimeout(() => input.focus(), 50);
        
        // Remove old listeners to prevent stacking
        input.onkeydown = null;
        input.onkeydown = (e) => { if(e.key === "Enter") this.confirmImport(); };
    },

    closeImportModal() {
        const modal = document.getElementById('import-modal');
        if(modal) modal.close();
    },

    confirmImport() {
        const input = document.getElementById('inp-import-code');
        const errorSpan = document.getElementById('header-error-msg');

        if (!input) return;

        const code = input.value ? input.value.trim() : "";
        if(!code) {
            errorSpan.innerText = "Please enter an import code.";
            return;
        }

        try {
            this.importReactor(code);
            this.closeImportModal();
        } catch (e) {
            errorSpan.innerText = "Import Error: " + e.message;
            console.error(e);
        }
    },


    // 4. IMPORT LOGIC

    importReactor(inputCode) {
        if (typeof inputCode !== 'string' || inputCode.trim() === "") {
            throw new Error("Input code is empty or invalid.");
        }

        try {
            // 1. Decode JSON
            const json = atob(inputCode.trim());
            const data = JSON.parse(json);

            // 2. Decode Grid
            if (!data.g || !data.s) throw new Error("Invalid Code Structure");
            
            const codes = this.fromBase64(data.g);
            const flatGrid = this.decompressLZW(codes);

            // 3. Apply Size & Reset
            UI.resetGrid(); 
            const inpSize = document.getElementById('inp-size');
            if(inpSize) inpSize.value = data.s;
            Reactor.init(data.s);

            // 4. Rebuild Layers
            Reactor.layers = [];
            const layerSize = data.s * data.s;
            let idx = 0;
            const totalLayers = Math.ceil(flatGrid.length / layerSize);

            for(let z=0; z<totalLayers; z++) {
                const layer = [];
                for(let y=0; y<data.s; y++) {
                    const row = [];
                    for(let x=0; x<data.s; x++) {
                        row.push(flatGrid[idx++] || 0);
                    }
                    layer.push(row);
                }
                Reactor.layers.push(layer);
            }

            // 5. Apply Core Stats
            if(document.getElementById('sel-fuel-type')) {
                document.getElementById('sel-fuel-type').value = (data.fT !== undefined) ? data.fT : 0;
                UI.onFuelSelect();
            }
            if(document.getElementById('sel-coolant-type')) {
                document.getElementById('sel-coolant-type').value = (data.cT !== undefined) ? data.cT : 0;
                UI.onCoolantSelect();
            }

            const crVal = (data.cR !== undefined) ? data.cR : 0;
            const slider = document.getElementById('inp-control-slider');
            const num = document.getElementById('inp-control-num');
            if(slider) slider.value = crVal;
            if(num) num.value = crVal;
            Reactor.stats.controlInsertion = crVal;

            // 6. Apply Fluid IO Stats & Tank Levels
            // We set the DOM elements first, then trigger the change handler to sync logic
            const chkAuto = document.getElementById('chk-io-auto');
            const chkMatch = document.getElementById('chk-io-match');
            const inpIn = document.getElementById('inp-io-in');
            const inpOut = document.getElementById('inp-io-out');

            if (chkAuto) chkAuto.checked = data.aI === 1;
            if (chkMatch) chkMatch.checked = data.mO === 1;
            if (inpIn) inpIn.value = (data.iR !== undefined) ? data.iR : 0;
            if (inpOut) inpOut.value = (data.oR !== undefined) ? data.oR : 0;

            // Trigger the UI logic to handle disabling inputs based on checkboxes
            UI.onFluidIOChange();

            // Set Tank Levels (Must happen AFTER onFluidIOChange, or auto-input might reset them)
            Reactor.stats.coolantAmount = (data.tC !== undefined) ? data.tC : 0;
            Reactor.stats.hotCoolantAmount = (data.tH !== undefined) ? data.tH : 0;
            
            // 7. Apply TPS
            const tpsInput = document.getElementById('tick-per-second');
            if(tpsInput) tpsInput.value = (data.tps !== undefined) ? data.tps : 20;

            // 8. Finalize
            UI.renderViewport();
            Simulation.analyzeStructure();
            UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
            
            const faVal = (data.fA !== undefined) ? data.fA : 0;
            const inpFuel = document.getElementById('inp-fuel-amount');
            if(inpFuel) inpFuel.value = faVal;
            
            UI.validateFuelInput();
            
            // Refresh visuals one last time to show tank levels immediately
            UI.updateStats();

        } catch (e) {
            document.getElementById('header-error-msg').innerText = "Import Failed: Invalid code or format."; 
            console.error(e);
        }
    }
};

const UI = {
    selectedBlock: 1, // Default Casing
    isDrawing: false,

    init() {
        this.generatePalette();
        this.resetGrid();
        try { this.populateFuelSelector(); } catch(e) { console.error(e); }
        try { this.populateCoolantSelector(); } catch(e) { console.error(e); }

        // UI State: 0 = None, 1 = Left Click (Paint), 2 = Right Click (Erase)
        this.drawMode = 0; 
    
        // Stop drawing on global mouse up
        window.addEventListener('mouseup', () => this.drawMode = 0);
        
        // Sync Slider and Number Input
        const slider = document.getElementById('inp-control-slider');
        const num = document.getElementById('inp-control-num');
    
        slider.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            num.value = val;
            Reactor.stats.controlInsertion = val;
        });

    
        num.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            if(val > 100) val = 100;
            if(val < 0) val = 0;
            slider.value = val;
            Reactor.stats.controlInsertion = val;
        });
    },

    resetGrid() {
        this.resetError();

        if (Simulation.intervalId) {
            Simulation.stop();
        }
        const input = document.getElementById('inp-size');
        let size = parseInt(input.value);
         
        const MIN_SIZE = 3;
        const MAX_SIZE = 25;
        if(isNaN(size)) size = 7;
        if(size < MIN_SIZE) size = MIN_SIZE;
        if(size > MAX_SIZE) size = MAX_SIZE;
        input.value = size;
    
        Reactor.init(size);

        // 1. Reset Control Rods to 0%
        Reactor.stats.controlInsertion = 0;
        document.getElementById('inp-control-slider').value = Reactor.stats.controlInsertion;
        document.getElementById('inp-control-num').value = Reactor.stats.controlInsertion;
        // 2. Reset Fuel Input to 0
        Reactor.stats.fuelLoadedAmount = 0;
        document.getElementById('inp-fuel-amount').value = Reactor.stats.fuelLoadedAmount;
        // 3. Clear any "Locked" fuel state
        
        Simulation.analyzeStructure();
        UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
        UI.updateStats();
    },

    generatePalette() {
        const p = document.getElementById('palette-grid');
        p.innerHTML = '';
        
        Object.keys(Registry.BLOCKS).forEach(key => {
            const b = Registry.BLOCKS[key];
            const slot = document.createElement('div');
            slot.className = 'slot';
            if(key == 1) slot.classList.add('selected');
            
            slot.onclick = () => {
                document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
                slot.classList.add('selected');
                this.selectedBlock = parseInt(key);
            };
    
            // Tooltip
            slot.onmouseenter = (e) => this.showTooltip(e, b.name);
            slot.onmouseleave = () => this.hideTooltip();
    
            // Inner visual
            const icon = document.createElement('div');
            icon.className = 'block-icon';
            icon.style.backgroundColor = b.color;
            
            // FIX: Apply texture to palette icon
            if(b.texture) {
                icon.style.backgroundImage = `url('${b.texture}')`;
            }
    
            slot.appendChild(icon);
            p.appendChild(slot);
        });
    },

    setSimulationLock(isLocked) {
    // 1. Lock/Unlock "New Reactor" Button & Size Input
    const btn = document.getElementById('btn-reset'); 
    const inpSize = document.getElementById('inp-size');
    
    if (isLocked) {
        if(btn) {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
            btn.style.pointerEvents = "none";
        }
        inpSize.disabled = true;
        inpSize.style.opacity = "0.5";
    } else {
        if(btn) {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.style.pointerEvents = "auto";
        }
        inpSize.disabled = false;
        inpSize.style.opacity = "1";
    }

    // Lock/Unlock Fuel Type Selector
    document.getElementById('sel-fuel-type').disabled = isLocked;

    // Lock/Unlock Grid Editing (Layers)
    // We hide the layer control buttons to prevent structural changes
    const layerBtns = document.querySelectorAll('.layer-header .mc-btn');
    layerBtns.forEach(btn => {
        btn.disabled = isLocked;
        btn.style.opacity = isLocked ? "0.3" : "1";
    });
    
    const addBtn = document.querySelector('#viewport > .mc-btn');
    if(addBtn) {
        addBtn.style.display = isLocked ? "none" : "flex";
    }

    document.getElementById('tick-per-second').disabled = isLocked;
    if(isLocked) {
        document.getElementById('tick-per-second').style.opacity = "0.5";
    } else {
        document.getElementById('tick-per-second').style.opacity = "1";
    }
    
    },

    resetError() {
    const errorSpan = document.getElementById('header-error-msg');
    if(errorSpan) errorSpan.innerText = "";
    },

    populateFuelSelector() {
        const sel = document.getElementById('sel-fuel-type');
        sel.innerHTML = "";
        
        // Iterate over Registry.FUELS instead of a separate array
        Object.keys(Registry.FUELS).forEach(key => {
            const fuel = Registry.FUELS[key];
            const opt = document.createElement('option');
            opt.value = key; // The key (0, 1, 2) acts as the ID
            opt.innerText = fuel.name;
            sel.appendChild(opt);
        });
        
        // Trigger initial stats load
        this.onFuelSelect();
    },

    onFuelSelect() {
        const id = document.getElementById('sel-fuel-type').value;
        const fuel = Registry.FUELS[id];
        
        // Update Visuals
        document.getElementById('fuel-icon-display').src = fuel.texture;
        
        // Update Stats Panel
        document.getElementById('stat-heat').innerText = fuel.heatPerFlux;
        document.getElementById('stat-curve').innerText = fuel.readableFunc;
        
        // Update Simulation State
        Reactor.stats.selectedFuel = fuel;
    },

    populateCoolantSelector() {
    const sel = document.getElementById('sel-coolant-type');
    sel.innerHTML = "";
    
    Object.keys(Registry.COOLANTS).forEach(key => {
        const coolant = Registry.COOLANTS[key];
        const opt = document.createElement('option');
        opt.value = key; 
        opt.innerText = coolant.name;
        sel.appendChild(opt);
    });
    
    this.onCoolantSelect(); // Load initial
    },

    onCoolantSelect() {
    const id = document.getElementById('sel-coolant-type').value;
    const coolant = Registry.COOLANTS[id];
    

    document.getElementById('coolant-icon-display').src = coolant.texture;
    
    // Update Stats Text
    document.getElementById('stat-cool-cap').innerText = coolant.heatCap;
    document.getElementById('stat-cool-flux').innerText = coolant.fluxMult;
    document.getElementById('stat-cool-heat').innerText = coolant.heatEff;
    document.getElementById('stat-cool-cool').innerText = coolant.coolEff;
    
    // Update State
    Reactor.stats.selectedCoolant = coolant;
    
    // Update Tank Colors based on selection
    document.getElementById('tank-fill-cold').style.backgroundColor = coolant.color;
    },

    onFluidIOChange() {
        const F = Reactor.stats.fluidio;
        const chkAuto = document.getElementById('chk-io-auto');
        const chkMatch = document.getElementById('chk-io-match');
        const inpIn = document.getElementById('inp-io-in');
        const inpOut = document.getElementById('inp-io-out');

        F.autoInput = chkAuto.checked;
        F.matchOutput = chkMatch.checked;
        
        let enteredInputRate = parseInt(inpIn.value) || 0;
        let enteredOutputRate = parseInt(inpOut.value) || 0;

        if(enteredInputRate < 0) enteredInputRate = 0;
        if(enteredOutputRate < 0) enteredOutputRate = 0;
        if(enteredInputRate > Reactor.TANK_CAPACITY) enteredInputRate = Reactor.TANK_CAPACITY;
        if(enteredOutputRate > Reactor.TANK_CAPACITY) enteredOutputRate = Reactor.TANK_CAPACITY;

        // Auto Mode Logic
        if (F.autoInput) {
            inpIn.disabled = true;
            inpIn.style.opacity = "0.5";
            
            // Force Match Output to true and disable it
            chkMatch.checked = true;
            chkMatch.disabled = true;
            F.matchOutput = true;
            F.inputRate = F.usage;

        } else {
            inpIn.disabled = false;
            inpIn.style.opacity = "1";
            F.inputRate = enteredInputRate;

            
            // Re-enable Match Output checkbox
            chkMatch.disabled = false;
        }

        // matchOutput Mode Logic
        if (F.matchOutput) {
            inpOut.disabled = true;
            inpOut.style.opacity = "0.5";
            inpOut.value = inpIn.value; // Visual sync
            F.outputRate = F.inputRate;
        } else {
            inpOut.disabled = false;
            inpOut.style.opacity = "1";
            F.outputRate = enteredOutputRate;
        }
        
        this.updateFluidIODisplay();
    },

    updateFluidIODisplay() {
        const F = Reactor.stats.fluidio;
        
        // Update Usage Text
        const elUsage = document.getElementById('val-io-usage');
        if(elUsage) elUsage.innerText = F.usage;
        document.getElementById('inp-io-in').value = F.inputRate;
        document.getElementById('inp-io-out').value = F.outputRate;

        // In Auto mode, the Input box shows the calculated rate
        if (F.autoInput) {
            document.getElementById('inp-io-in').value = F.usage;
            document.getElementById('inp-io-out').value = F.usage; // Match output is forced
        }
    },

    updateFuelMaxLimit(maxCapacity) {
        const inp = document.getElementById('inp-fuel-amount');
        
        // Update visual limits
        inp.max = maxCapacity;
        inp.placeholder = `Max: ${maxCapacity}`;
        
        this.validateFuelInput();
    },

    validateFuelInput() {
        const inp = document.getElementById('inp-fuel-amount');
        const maxLimit = Reactor.stats.struct.rodCount || 0;        
        let val = parseInt(inp.value) || 0;
        
        if (val > maxLimit) {
            val = maxLimit;
        }
        if (val < 0) {
            val = 0;
        }
        
        inp.value = val;
        Reactor.stats.fuelLoadedAmount = val;
        this.calculateDensity(val, maxLimit);
        UI.updateStats();
    },

    setMaxFuel() {
        const max = Reactor.stats.struct.rodCount;
        document.getElementById('inp-fuel-amount').value = max;
        this.calculateDensity(max, max);
    },

    calculateDensity(amount, capacity) {
        let density = 0;
        if(capacity > 0) {
            density = amount / capacity;
        }
        
        // Update Display
        document.getElementById('val-density').innerText = density.toFixed(2);
        
        // Store for Simulation Handoff
        Reactor.stats.fuelDensity = density;
        Reactor.stats.fuelLoadedAmount = amount;
},
    
updateToggleBtn(isRunning) {
    const btn = document.getElementById('btn-toggle');
    if(isRunning) {
        btn.innerText = "SCRAM";
        btn.style.color = "red";
        btn.style.borderColor = "red";
    } else {
        btn.innerText = "START";
        // Clear inline styles so it goes back to default CSS look
        btn.style.color = ""; 
        btn.style.borderColor = "";
    }
},

    renderViewport() {
        const vp = document.getElementById('viewport');
        const addBtn = document.getElementById('btn-add-layer');
        vp.innerHTML = ''; //Clear the viewport
    
        Reactor.layers.forEach((layer, zIndex) => {
            const container = document.createElement('div');
            container.className = 'layer-container';
    
            container.innerHTML = `
                <div class="layer-header">
                    <span>Layer ${zIndex+1}</span>
                    <button class="mc-btn" style="padding:0 5px; font-size:0.8rem;" onclick="Reactor.duplicateLayer(${zIndex})">CPY</button>
                    <button class="mc-btn" style="padding:0 5px; font-size:0.8rem;" onclick="Reactor.fillLayer(${zIndex}, UI.selectedBlock)">FILL</button>
                    <button class="mc-btn" style="padding:0 5px; font-size:0.8rem;" onclick="Reactor.borderLayer(${zIndex}, UI.selectedBlock)">BORDER</button>
                    <button class="mc-btn" style="padding:0 5px; font-size:0.8rem;" onclick="Reactor.clearLayer(${zIndex})">CLR</button>
                    <button class="mc-btn" style="padding:0 5px; font-size:0.8rem; color:#ff5555" onclick="Reactor.removeLayer(${zIndex})">X</button>
                </div>
            `;
    
            const grid = document.createElement('div');
            grid.className = 'grid-editor';
            grid.id = `layer-${zIndex}`;
            grid.style.gridTemplateColumns = `repeat(${Reactor.size}, 1fr)`;
            grid.style.gridTemplateRows = `repeat(${Reactor.size}, 1fr)`;
    
            // Prevent context menu on the whole grid to allow smooth right-drag
            grid.oncontextmenu = (e) => { e.preventDefault(); return false; };
    
            for(let y=0; y<Reactor.size; y++) {
                for(let x=0; x<Reactor.size; x++) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.dataset.x = x;
                    cell.dataset.y = y;
                    cell.dataset.z = zIndex;
                    
                    // Initial Render
                    const bid = layer[y][x];
                    const b = Registry.BLOCKS[bid];
                    cell.style.backgroundColor = b.color;
                    if(b.texture) cell.style.backgroundImage = `url('${b.texture}')`;
    
                    // --- MOUSE EVENTS FOR DRAGGING ---
                    
                    // 1. Mouse Down: Set Mode
                    cell.onmousedown = (e) => {
                        if(e.button === 0) {
                            this.drawMode = 1; // Paint
                            this.paint(zIndex, x, y, cell);
                        } else if(e.button === 2) {
                            this.drawMode = 2; // Erase
                            this.paint(zIndex, x, y, cell, 0);
                        }
                    };
    
                    // 2. Mouse Enter: Check Mode
                    cell.onmouseenter = (e) => {
                        if(this.drawMode === 1) {
                            this.paint(zIndex, x, y, cell); // Paint Selected
                        } else if(this.drawMode === 2) {
                            this.paint(zIndex, x, y, cell, 0); // Erase (Paint Air)
                        }
                        this.showTooltip(e, `X:${x} Y:${y} (${Registry.BLOCKS[Reactor.getBlock(x,y,zIndex)].name})`);
                    };
    
                    cell.onmouseleave = () => this.hideTooltip();
                    grid.appendChild(cell);

                }
            }
            container.appendChild(grid);
            vp.appendChild(container);

        });
    
        if(addBtn) vp.appendChild(addBtn);

        Simulation.analyzeStructure(); 
        UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
},

    // Fast update for a specific layer's DOM (instead of full rerender)
    updateLayerDOM(zIndex) {
        const grid = document.getElementById(`layer-${zIndex}`);
        if(!grid) return;
        
        const cells = grid.children;
        for(let i=0; i<cells.length; i++) {
            const cell = cells[i];
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);
            
            // Get new ID from model
            const bid = Reactor.layers[zIndex][y][x];
            const b = Registry.BLOCKS[bid];
            
            // Update Color
            cell.style.backgroundColor = b.color;
            
            // FIX: Update Texture
            if(b.texture) {
                cell.style.backgroundImage = `url('${b.texture}')`;
            } else {
                cell.style.backgroundImage = 'none';
            }
        }
        Simulation.analyzeStructure();
        UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
},

    paint(z, x, y, cellDom, specificId = null) {
        if (Simulation.intervalId) return;  // No editing while running
        
        const idToSet = (specificId !== null) ? specificId : this.selectedBlock;
        Reactor.setBlock(z, x, y, idToSet);
        
        // Update visuals
        const b = Registry.BLOCKS[idToSet];
        cellDom.style.backgroundColor = b.color;
        if(b.texture) {
            cellDom.style.backgroundImage = `url('${b.texture}')`;
        } else {
            cellDom.style.backgroundImage = 'none';
        }
        // Recompute stats
        Simulation.analyzeStructure();
        UI.updateFuelMaxLimit(Reactor.stats.struct.rodCount);
},

    updateStats() {
        const S = Reactor.stats;
        
        const safeUpdate = (id, prop, val) => {
            const el = document.getElementById(id);
            if (el) el.style[prop] = val;
        };
        const safeText = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val;
        };

        let visualRod = S.rodLevel;
        if (visualRod < 0) visualRod = 0;
        if (visualRod > 100) visualRod = 100;

        safeUpdate('bar-rod-level', 'width', `${visualRod}%`);
        safeText('txt-rod-level', `${Math.floor(visualRod)}%`);

        // Core Heat Bar & Text
        const updateHeatVisuals = (elementId, current, max) => {
            const bar = document.getElementById(elementId);
            const pct = Math.min(100, Math.max(0, (current / max) * 100));
            bar.style.width = `${pct}%`;

            if(pct < 50) bar.style.backgroundColor = "#55ff55";
            else if(pct < 80) bar.style.backgroundColor = "#ffff55";
            else bar.style.backgroundColor = "#ff3333";
        }

        updateHeatVisuals('bar-heat-core', S.coreHeat, S.maxHeat);
        updateHeatVisuals('bar-heat-hull', S.hullHeat, S.maxHeat);

        safeText('txt-heat-core', `${Math.floor(S.coreHeat).toLocaleString()} / ${(S.maxHeat/1000000).toFixed(1)}M`);
        safeText('txt-heat-hull', `${Math.floor(S.hullHeat).toLocaleString()} / ${(S.maxHeat/1000000).toFixed(1)}M`);
        safeText('txt-rods', S.struct.rodCount);
        safeText('txt-flux', Math.floor(S.flux).toLocaleString());

        const cap = Reactor.TANK_CAPACITY || 128000;
        // Cold Tank
        const coldPct = (S.coolantAmount / cap) * 100;
        safeUpdate('tank-fill-cold', 'height', `${coldPct}%`);
        safeText('tank-text-cold', `${Math.floor(S.coolantAmount / 1000)}k mB`);
        
        // Hot Tank
        const hotPct = (S.hotCoolantAmount / cap) * 100;
        safeUpdate('tank-fill-hot', 'height', `${hotPct}%`);
        safeText('tank-text-hot', `${Math.floor(S.hotCoolantAmount / 1000)}k mB`);
        this.updateFluidIODisplay();
    },

    showTooltip(e, text) {
        const t = document.getElementById('tooltip');
        t.style.display = 'block';
        t.innerText = text;
        t.style.left = (e.pageX + 15) + 'px';
        t.style.top = (e.pageY + 15) + 'px';
},

    hideTooltip() {
        document.getElementById('tooltip').style.display = 'none';
    }
};


UI.init();

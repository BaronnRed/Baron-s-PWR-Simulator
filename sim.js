
const Registry = {
    BLOCKS: {
        0: { name: "Air", texture: "textures/air.png", color: "transparent"},
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
        5: { name: "Liquid Lead",     heatCap: 800,  heatEff: 0.85,coolEff: 0.75,fluxMult: 0.75,   color: "rgba(62, 62, 74, 0.6)",  texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/lead.png" },
        6: { name: "Thorium Salt",    heatCap: 400,  heatEff: 1.0, coolEff: 1.0, fluxMult: 2.5,     color: "rgba(106, 69, 49, 0.6)",  texture: "https://raw.githubusercontent.com/HbmMods/Hbm-s-Nuclear-Tech-GIT/master/src/main/resources/assets/hbm/textures/gui/fluids/thorium_salt.png" },       
        7: { name: "Liquid Hydrogen",       heatCap: 300,  heatEff: 0, coolEff: 1.0, fluxMult: 1,       ISP:900, thrust:700_000,  color: "rgba(75, 149, 193, 0.6)",   texture: "https://raw.githubusercontent.com/JameH2/Hbm-s-Nuclear-Tech-GIT/refs/heads/space-travel-twopointfive/src/main/resources/assets/hbm/textures/gui/fluids/hydrogen.png" },
        8: { name: "Poisonous Mud",         heatCap: 300,  heatEff: 0, coolEff: 1.0, fluxMult: 1.4,     ISP:1200, thrust:700_000,  color: "rgba(102, 68, 30, 0.6)",    texture: "https://raw.githubusercontent.com/JameH2/Hbm-s-Nuclear-Tech-GIT/refs/heads/space-travel-twopointfive/src/main/resources/assets/hbm/textures/gui/fluids/watz.png" },
        9: { name: "Liquid Nuclear Waste",  heatCap: 300,  heatEff: 0, coolEff: 1.0, fluxMult: 1.2,     ISP:900, thrust:700_000,  color: "rgba(84, 69, 0, 0.6)",      texture: "https://raw.githubusercontent.com/JameH2/Hbm-s-Nuclear-Tech-GIT/refs/heads/space-travel-twopointfive/src/main/resources/assets/hbm/textures/gui/fluids/wastefluid.png" },
        10: { name: "Uranium Bromide",      heatCap: 300,  heatEff: 0, coolEff: 1.0, fluxMult: 1.75,    ISP:1500, thrust:700_000,  color: "rgba(217, 214, 198, 0.6)",  texture: "https://raw.githubusercontent.com/JameH2/Hbm-s-Nuclear-Tech-GIT/refs/heads/space-travel-twopointfive/src/main/resources/assets/hbm/textures/gui/fluids/uranium_bromide.png" },
        11: { name: "Thorium Bromide",      heatCap: 300,  heatEff: 0, coolEff: 1.0, fluxMult: 1.5,     ISP:1300, thrust:700_000,  color: "rgba(122, 85, 67, 0.6)",    texture: "https://raw.githubusercontent.com/JameH2/Hbm-s-Nuclear-Tech-GIT/refs/heads/space-travel-twopointfive/src/main/resources/assets/hbm/textures/gui/fluids/thorium_bromide.png" },            
        
    }
};

const Reactor = {
    size: 7,
    layers: [], 
    TANK_CAPACITY: 128_000,

    // Simulation State
    stats: {
        maxHeat: 10_000_000,
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
        fuelYield: 1_000_000_000,
        fuelLife: 0,
        heatGenerated: 0,
        usableHeat: 0,      

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

        moveLayer(fromIndex, toIndex) {
            if (fromIndex === toIndex) return;
            const layerToMove = this.layers.splice(fromIndex, 1)[0];
            this.layers.splice(toIndex, 0, layerToMove);
            UI.renderViewport();

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
        Reactor.stats.maxHeat = 10_000_000 + (Struct.effectiveHeatsinkCount * 500_000);
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
        fuelLife = S.fuelYield/totalOutput/20;// in seconds

        
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

        let efficientHeat = S.hullHeat * coolingEff * (trait.heatEff || 1.0);
        let heatToUse = Math.min(S.hullHeat, efficientHeat);
        
        if (heatToUse > 2_000_000_000) heatToUse = 2_000_000_000; 
        
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

        // Heat Calculation
        S.heatGenerated = heatPerMB * F.usage * trait.heatEff;
        S.usableHeat = S.heatGenerated * 0.991; // 0.991 comes from decay (0.999) and heat transfer (T*0.1 TU/t) 

        // Flux Mult
        if(S.coolantAmount > 0) {
        let modMult = S.selectedCoolant.fluxMult || 1.0;
        S.flux = newFlux * modMult;
        } else { S.flux = newFlux;}

    }

    // Passive Decay (Java: 0.999D)
    S.coreHeat = Math.trunc(S.coreHeat * 0.999);
    S.hullHeat = Math.trunc(S.hullHeat * 0.999);
   
    S.fuelLife = S.fuelYield / S.flux / 20; // in seconds 

    // --- 7. MELTDOWN ---
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

            tC: Math.floor(S.coolantAmount),      // Tank Cold
            tH: Math.floor(S.hotCoolantAmount),   // Tank Hot

            iR: F.inputRate,
            oR: F.outputRate,
            aI: F.autoInput ? 1 : 0,    // 1 = Checked, 0 = Unchecked
            mO: F.matchOutput ? 1 : 0,
            
            tps: tpsVal
        };

        try {
            const json = JSON.stringify(data);
            const code = btoa(json);
            //Easy sharing update
            const baseUrl = window.location.href.split('#')[0];
            const link = `${baseUrl}#${code}`;
            
            navigator.clipboard.writeText(link).then(() => {
                const btn = document.getElementById('btn-export');
                if(!btn) return;

                if (!btn.dataset.originalText) btn.dataset.originalText = btn.innerText;
                if (btn.dataset.timer) clearTimeout(parseInt(btn.dataset.timer));

                btn.innerText = "Link Copied!";
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
        //Easy Import
        if (inputCode.includes('#')) {
            inputCode = inputCode.split('#').pop();
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
    },
    //Auto Import function
    checkDeepLink() {
        if(window.location.hash) {
            // Strip the '#' and get the code
            const potentialCode = window.location.hash.substring(1); 
            
            // Basic check to ensure it's not an empty hash or just a section anchor
            if(potentialCode.length > 20) {
                console.log("Deep link detected. Attempting import...");
                try {
                    this.importReactor(potentialCode);
                    console.log("Deep link import successful.");
                } catch(e) {
                    console.warn("Deep link hash was not a valid reactor code.");
                    errorSpan.innerText = "Import Error: " + e.message;

                }
            }
            this.clearHash();
        }
    },
    
    clearHash(){
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
};

const ReactorPrinter = {

    config: {
        gridSize: 32,       // The "step" size for the grid (half the visual width)
        textureSize: 32,    // The source size to draw (scaled down from 64 to fit grid)
        blockDepth: 32,     // Visual height of the block sides
    },

    async download(reactorData) {
        // UI Handling
        const errorEl = document.getElementById('header-error-msg');
        const btn = document.getElementById('btn-download');

        const error = Simulation.validateStructure();
        if (error) {
            Simulation.triggerError(error);
            return;
        }

        if (!window.JSZip || !window.saveAs) {
            // Print error to HTML existing element
            if (errorEl) {
                errorEl.innerText = "Error: Feature not working. Fresh the page or alert the site maintainer.";
            }
            if (btn) {
                btn.disabled = true;
                btn.style.opacity = "0.5";
                btn.style.cursor = "not-allowed";
            }
            
            return;
        }

        try {
            const zip = new JSZip();
            const textureMap = await this.preloadTextures();
            const casingTex = textureMap[1]; //Reactor Casing

            // Render each layer
            for (let z = 0; z < reactorData.layers.length; z++) {
                // Pass the casing texture explicitly for sides
                const canvas = this.renderLayer(z, reactorData, textureMap, casingTex);
                const blob = await new Promise(resolve => canvas.toBlob(resolve));
                zip.file(`slice_${z}.png`, blob);
            }

            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, "reactor_schematic.zip");
            
        } catch (e) {
            console.error(e);
            if(errorEl) errorEl.innerText = "Error generating images. See console.";
        }
    },

    async exportToPng(reactor) {
        if (!window.saveAs) {
            console.error("FileSaver.js (window.saveAs) is missing.");
            return;
        }

        try {
            const textureMap = await this.preloadTextures();
            const casingTex = textureMap[1];
            
            // --- SETTING: GAP SIZE ---
            // This is the literal pixels of empty air between layers.
            // Positive = Floating apart. Negative = Overlapping.
            const spacing = -40; 

            // 1. Render Raw Layers (Full Grid Size)
            const rawCanvases = [];
            for (let z = 0; z < reactor.layers.length; z++) {
                rawCanvases.push(this.renderLayer(z, reactor, textureMap, casingTex));
            }

            // 2. Calculate Global Bounds (Union of all layers)
            // We need one common box for ALL layers to preserve relative x/y alignment.
            const bounds = this.getGlobalOccupiedBounds(reactor);
            
            // 3. Crop all layers to the SAME global bounds
            const layerCanvases = rawCanvases.map(canvas => 
                this.cropCanvas(canvas, bounds)
            );

            // 4. Calculate Dimensions
            // For a true exploded view, the step must be the full image height + gap
            const frameHeight = bounds.h;
            const layerStep = frameHeight + spacing; 

            let totalHeight = frameHeight;
            if (layerCanvases.length > 1) {
                 totalHeight += (layerCanvases.length - 1) * layerStep;
            }

            // 5. Create Master Canvas
            const master = document.createElement('canvas');
            master.width = bounds.w; 
            master.height = totalHeight > 0 ? totalHeight : 100;
            const ctx = master.getContext('2d');

            // 6. Stack Layers (Top to Bottom)
            let currentY = 0;
            
            // 'source-over' is fine here because we are spacing them apart (no overlap),
            // but 'destination-over' is safer if you ever decide to use negative spacing.
            ctx.globalCompositeOperation = 'destination-over';

            for (let z = reactor.layers.length - 1; z >= 0; z--) {
                const layer = layerCanvases[z];
                // Draw centered (since they are all cropped to the same width)
                ctx.drawImage(layer, 0, currentY);
                currentY += layerStep;
            }

            master.toBlob((blob) => {
                window.saveAs(blob, "reactor_exploded.png");
            });

        } catch (e) {
            console.error("Error exporting PNG:", e);
        }
    },

    // Scans the ENTIRE reactor to find the min/max X/Y of any block
    getGlobalOccupiedBounds(reactor) {
        let minX = Infinity, minY = Infinity;
        let maxX = -Infinity, maxY = -Infinity;
        let hasBlocks = false;

        // Base geometric offsets (Must match renderLayer logic)
        const gridBounds = this.calculateBounds(reactor.size);
        const padding = 64;
        const originX = -gridBounds.minX + (padding / 2) + this.config.gridSize;
        const originY = -gridBounds.minY + (padding / 2);
        
        // Loop through every block in every layer
        reactor.iter3D((x, y, z, id) => {
            if (id === 0) return; 
            hasBlocks = true;

            const screenX = originX + (x - y) * this.config.gridSize;
            const screenY = originY + (x + y) * (this.config.gridSize / 2);

            // Add margin for the sprite size (approx 32x32 + depth)
            // We expand the box slightly to ensure no pixels are cut off
            if (screenX - 40 < minX) minX = screenX - 40;
            if (screenX + 72 > maxX) maxX = screenX + 72; // Width of sprite
            if (screenY - 40 < minY) minY = screenY - 40;
            if (screenY + 72 > maxY) maxY = screenY + 72; // Height + Depth
        });

        if (!hasBlocks) return { x:0, y:0, w:100, h:100 };

        return {
            x: Math.floor(minX),
            y: Math.floor(minY),
            w: Math.ceil(maxX - minX),
            h: Math.ceil(maxY - minY)
        };
    },

    cropCanvas(sourceCanvas, rect) {
        // Create a new canvas of the exact size of the occupied area
        const dest = document.createElement('canvas');
        dest.width = rect.w;
        dest.height = rect.h;
        const ctx = dest.getContext('2d');

        // Copy just the relevant region
        ctx.drawImage(
            sourceCanvas, 
            rect.x, rect.y, rect.w, rect.h, 
            0, 0, rect.w, rect.h
        );
        return dest;
    },

    preloadTextures() {
        return new Promise((resolve) => {
            const promises = [];
            const loadedTextures = {};

            Object.keys(Registry.BLOCKS).forEach(id => {
                const block = Registry.BLOCKS[id];
                if (id == 0 || !block.texture) return; 

                const p = new Promise((res) => {
                    const img = new Image();
                    img.crossOrigin = "Anonymous"; 
                    img.src = block.texture;
                    img.onload = () => {
                        loadedTextures[id] = img;
                        res();
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load texture for ${block.name}`);
                        res(); 
                    };
                });
                promises.push(p);
            });

            Promise.all(promises).then(() => resolve(loadedTextures));
        });
    },

    // Calculate the absolute pixel bounds of the isometric layer
    calculateBounds(size) {
        const stepX = this.config.gridSize;     // 32
        const stepY = this.config.gridSize / 2; // 16

        // The four corners of the grid in isometric coordinates
        // Top (0,0), Right (N,0), Bottom (N,N), Left (0,N)
        // Formula: isoX = (x - y) * stepX
        //          isoY = (x + y) * stepY
        
        const maxX = size - 1;
        const maxY = size - 1;

        const c1 = { x: (0 - 0) * stepX,       y: (0 + 0) * stepY };
        const c2 = { x: (maxX - 0) * stepX,    y: (maxX + 0) * stepY };
        const c3 = { x: (maxX - maxY) * stepX, y: (maxX + maxY) * stepY };
        const c4 = { x: (0 - maxY) * stepX,    y: (0 + maxY) * stepY };

        const xs = [c1.x, c2.x, c3.x, c4.x];
        const ys = [c1.y, c2.y, c3.y, c4.y];

        return {
            minX: Math.min(...xs),
            maxX: Math.max(...xs),
            minY: Math.min(...ys),
            maxY: Math.max(...ys)
        };
    },

renderLayer(layerIndex, reactor, textureMap, casingTex) {

        const size = reactor.size;
        const c = this.config;
        
        // 1. Calculate Canvas Size & Offset
        const bounds = this.calculateBounds(size);
        const padding = 64; 

        const width = (bounds.maxX - bounds.minX) + (c.gridSize * 2) + padding;
        const height = (bounds.maxY - bounds.minY) + c.blockDepth + c.gridSize + padding;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        ctx.imageSmoothingEnabled = false;

        // 2. Set Origin
        const originX = -bounds.minX + (padding / 2) + c.gridSize;
        const originY = -bounds.minY + (padding / 2);

        // 3. Render Loop
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const blockId = reactor.getBlock(x, y, layerIndex);
                if (blockId === 0) continue; 

                // Isometric Position
                const screenX = originX + (x - y) * c.gridSize;
                const screenY = originY + (x + y) * (c.gridSize / 2);

                let topTex = textureMap[blockId];
                let rightTex = casingTex; 
                let leftTex = casingTex;

                // 2. Special Case: Neutron Reflector (ID 6)
                if (blockId === 6) {
                    rightTex = textureMap[6];
                    leftTex = textureMap[6];
                }

                // 3. Special Case: Controller (ID 8)
                if (blockId === 8) {
                    topTex = casingTex; // Force top to casing
                    
                    // Decide which side gets the screen
                    if (x >= y) {
                        rightTex = textureMap[8]; // Screen on Right
                    } else {
                        leftTex = textureMap[8];  // Screen on Left
                    }
                }
                

                this.drawBlock(ctx, screenX, screenY, topTex, rightTex, leftTex);
            }
        }
        return canvas;
    },

    drawBlock(ctx, x, y, topTex, rightSide, leftSide) {
        const c = this.config;
        const size = c.textureSize; // 32


        // --- 1. Left Face ---
        if (leftSide) {
            ctx.save();
            ctx.translate(x - size, y); // Position at left corner
            // Skew vertically for left face
            ctx.transform(1, 0.5, 0, 1, 0, 0); 
            ctx.filter = "brightness(0.6)"; // Darken side
            // Scale texture to fill the depth
            ctx.drawImage(leftSide, 0, 0, leftSide.width, leftSide.height, 0, 0, size, c.blockDepth);
            ctx.restore();
        }

        // --- 2. Right Face ---
        if (rightSide) {
            ctx.save();
            ctx.translate(x, y + (size/2)); // Position at bottom center
            // Skew vertically for right face
            ctx.transform(1, -0.5, 0, 1, 0, 0); 
            ctx.filter = "brightness(0.8)"; // Slightly lighter side
            ctx.drawImage(rightSide, 0, 0, rightSide.width, rightSide.height, 0, 0, size, c.blockDepth);
            ctx.restore();
        }

        // --- 3. Top Face ---
        if (topTex) {
            ctx.save();
            ctx.translate(x, y - (size/2)); // Position at top center
            // ISOMETRIC TRANSFORM: [1, 0.5, -1, 0.5, 0, 0]
            // This turns a square into the top diamond
            ctx.transform(1, 0.5, -1, 0.5, 0, 0); 
            
            ctx.drawImage(topTex, 0, 0, topTex.width, topTex.height, 0, 0, size, size);
            ctx.restore();
        }
    }
};

const UI = {
    selectedBlock: 1, // Default Casing
    energyMode: 0, // 0 = Seconds (/s), 1 = Ticks (/t)
    fuelMode: 0, // (0=Seconds, 1=Minutes, 2=Ticks)
    isDrawing: false,

    init() {
        this.generatePalette();
        this.resetGrid();
        window.cycleFuelUnit = () => this.cycleFuelUnit();
        window.cycleEnergyUnit = () => this.cycleEnergyUnit();
        try { this.populateFuelSelector(); } catch(e) { console.error(e); }
        try { this.populateCoolantSelector(); } catch(e) { console.error(e); }

        // UI State: 0 = None, 1 = Left Click (Paint), 2 = Right Click (Erase)
        this.drawMode = 0; 
    
        // Stop drawing on global mouse up
        window.addEventListener('mouseup', () => this.drawMode = 0);

        window.addEventListener('hashchange', () => {
            if (window.location.hash.length > 1) {
                console.log("Hash change detected. Importing...");
                IO.checkDeepLink(); 
            }
        });
        
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
        IO.checkDeepLink();
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

    cycleFuelUnit() {
        this.fuelMode = (this.fuelMode + 1) % 3;
        const labels = ["seconds", "minutes", "ticks"];
        
        const labelEl = document.getElementById("lbl-fuel-unit");
        if(labelEl) labelEl.innerText = labels[this.fuelMode];
        
        this.updateStats(); 
    },

    cycleEnergyUnit() {
        this.energyMode = (this.energyMode + 1) % 2;
        const labels = ["/s", "/t"];
        
        const labelEl = document.getElementById("energy-unit");
        if(labelEl) labelEl.innerText = labels[this.energyMode];
        
        this.updateStats(); 
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
        if( fuel.name === "BFB_AM_MIX" && fuel.name === "BFB_PU241") {
            Reactor.stats.fuelYield = 250_000_000;
        } else {
            Reactor.stats.fuelYield = 1000_000_000;
        }
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
            container.draggable = false;

            container.ondragstart = (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', zIndex); // Store the source index
            container.style.opacity = '0.5'; // Visual feedback
        };

        // 2. Drag End: Reset visual feedback
        container.ondragend = () => {
            container.style.opacity = '1';
            container.draggable = false;
            // Remove any drag-over highlights from all containers
            document.querySelectorAll('.layer-container').forEach(el => {
                el.style.border = ''; 
            });
        };

        // 3. Drag Over: Allow dropping here
        container.ondragover = (e) => {
            e.preventDefault(); // Necessary to allow dropping
            e.dataTransfer.dropEffect = 'move';
            // Optional: Add a border to show where it will land
            container.style.border = '2px dashed #fff'; 
        };

        // 4. Drag Leave: Clean up style
        container.ondragleave = () => {
            container.style.border = '';
        };

        // 5. Drop: Execute the move
        container.ondrop = (e) => {
            e.preventDefault();
            container.style.border = ''; // Clear style
            
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
            Reactor.moveLayer(fromIndex, zIndex);
        };
    
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
    
        const header = container.querySelector('.layer-header');
    
        header.onmousedown = (e) => {
        // Prevent drag if clicking buttons inside header
        if(e.target.tagName === 'BUTTON') return;
        // Enable drag on parent ONLY when holding header
            container.draggable = true; 
        };

        header.onmouseup = () => {
            // If we just clicked without dragging, reset state
            container.draggable = false;
        };

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

    formatEnergy(num) {
        if (num >= 1_000_000_000_000) {
            return (num / 1_000_000_000_000).toFixed(2) + " T";
        }
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(2) + " G";
        }
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(2) + " M";
        }
        if (num >= 1_000) {
            return (num / 1_000).toFixed(2) + " k";
        }
        return Math.floor(num).toLocaleString();
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

        safeText('txt-heat-core', `${Math.floor(S.coreHeat).toLocaleString()} TU / ${(S.maxHeat/1_000_000).toFixed(1)} MTU`);
        safeText('txt-heat-hull', `${Math.floor(S.hullHeat).toLocaleString()} TU / ${(S.maxHeat/1_000_000).toFixed(1)} MTU`);
        safeText('txt-rods', S.struct.rodCount);
        safeText('txt-flux', Math.floor(S.flux).toLocaleString());

        let displayLife = S.fuelLife;
        if (this.fuelMode === 1) {
            displayLife = S.fuelLife / 60;
        } else if (this.fuelMode === 2) {
            displayLife = S.fuelLife * 20;
        }
        safeText('txt-fuel-life', `${Math.floor(displayLife)}`);

        let displayEnergy = S.usableHeat
        if (this.energyMode === 0) {
            displayEnergy = S.usableHeat * 20;
        }
        safeText('txt-energy-produced', this.formatEnergy(displayEnergy))


        const cap = Reactor.TANK_CAPACITY || 128_000;
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

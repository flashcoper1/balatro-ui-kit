import background from './background.fs?raw';
import booster from './booster.fs?raw';
import crt from './CRT.fs?raw';
import debuff from './debuff.fs?raw';
import dissolve from './dissolve.fs?raw';
import flame from './flame.fs?raw';
import flash from './flash.fs?raw';
import foil from './foil.fs?raw';
import gold_seal from './gold_seal.fs?raw';
import holo from './holo.fs?raw';
import hologram from './hologram.fs?raw';
import negative_shine from './negative_shine.fs?raw';
import negative from './negative.fs?raw';
import played from './played.fs?raw';
import polychrome from './polychrome.fs?raw';
import skew from './skew.fs?raw';
import splash from './splash.fs?raw';
import vortex from './vortex.fs?raw';
import voucher from './voucher.fs?raw';

export const shaders = {
  background,
  booster,
  crt,
  debuff,
  dissolve,
  flame,
  flash,
  foil,
  gold_seal,
  holo,
  hologram,
  negative_shine,
  negative,
  played,
  polychrome,
  skew,
  splash,
  vortex,
  voucher,
} as const;

export type ShaderName = keyof typeof shaders;


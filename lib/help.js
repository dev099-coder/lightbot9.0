
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp) => { 
	return `                 
┏━━❉ *Sobre o usuário * ❉━━━┓
┣⊱ *nome* : ${pushname}
┣⊱ *número* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *nível* : ${getLevelingLevel(sender)}
┗━━━━━━━━━━━━━━━━

┏━━❉ *NÍVEL 0* ❉━━┓
┣⊱ *${prefix}figurinha*
┣⊱ *${prefix}falar*
┣⊱ *${prefix}obterimg*
┣━━❉ *NÍVEL 2* ❉━━
┣⊱ *${prefix}obtertextoimg*
┣⊱ *${prefix}citarmaker*
┣⊱ *${prefix}infotikoteko*
┣⊱ *${prefix}fototikoteko*
┣⊱ *${prefix}verdade*
┣⊱ *${prefix}ousar*
┣━━❉ *NÍVEL 4* ❉━━
┣⊱ *${prefix}texto3d*
┣⊱ *${prefix}Bucine*
┣⊱ *${prefix}enctexto*
┣⊱ *${prefix}levelgay*
┣⊱ *${prefix}ssrede*
┣━━❉ *LEVEL 6* ❉━━
┣⊱ *${prefix}significadonome*
┣⊱ *${prefix}spamligar*
┣⊱ *${prefix}citações*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}mapa*
┣⊱ *${prefix}história curta*
┣━━❉ *LEVEL 8* ❉━━
┣⊱ *${prefix}acorde*
┣⊱ *${prefix}letramsc*
┣⊱ *${prefix}pornhublogo*
┣━━❉ *LEVEL 9* ❉━━
┣⊱ *${prefix}vocêpode*
┣⊱ *${prefix}oque*
┣⊱ *${prefix}quando*
┣⊱ *${prefix}taxa*
┣⊱ *${prefix}dono*
┗━━━━━━━━━━━━━━

┏━━❉ *Nsfw* ❉━━━━┓
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}alguém*
┣⊱ *${prefix}orvalho*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}cachorro*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━

┏━━❉ *Grupo* ❉━━━━┓
┣⊱ *${prefix}ocultartag*
┣⊱ *${prefix}linkgp*
┣⊱ *${prefix}marcartodos*
┣⊱ *${prefix}perfilbot*
┣⊱ *${prefix}add*
┣⊱ *${prefix}ban*
┣⊱ *${prefix}nomegp*
┣⊱ *${prefix}descgp*
┣⊱ *${prefix}rebaixar*
┣⊱ *${prefix}promover*
┣⊱ *${prefix}ademirlista*
┣⊱ *${prefix}grupo* [Abrir/Fechar]
┣⊱ *${prefix}nivelamento* [habilitar/desabilitar]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}bem-vindo* [1/0]
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}transmitir*
┣⊱ *${prefix}colocarprefixo*
┣⊱ *${prefix}peguedele*
┣⊱ *${prefix}limpartudo*
┣⊱ *${prefix}bloquear*
┣⊱ *${prefix}desbloquear*
┣⊱ *${prefix}sair*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━━━


`
}
exports.help = help



  

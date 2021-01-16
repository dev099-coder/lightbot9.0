exports.wait = () => {
	return`*「 ESPERAR 」 EM PROCESSO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 NIVELANDO*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 NIVELANDO*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*Como registrar ${prefix}cadastro nome|idade ou sobrenome* \n*exemplo ${prefix}cadastro Gabriel|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「SÓ GRUPO」*`
}

exports.ownerb = () => {
	return`*「PROPRIETÁRIO BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「PROPRIETÁRIO DESTE GRUPO APENAS」*`
}

exports.admin = () => {
	return`*「FICA NA TUA MEMBRO COMUM VOCÊ NÃO TEM CAPACIDADE DE USAR ESTE COMANDOS!」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\n para saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*Use .menujika para não receber uma mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DE PAÍS 」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱sobrenome ou idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} script do proprietário bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱comando tipo : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : CHAT/SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA : CHAT/SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : CHAT / SEMPRE PARA OBTER XP_`
}

exports.antilinker = (pushname) => {
	return`*Desculpa ${pushname}*\n*Você foi expulso do grupo por enviar outro link de grupo*`
}

exports.detectorOnAlready = () => {
	return`*ANTES DE SEU ANTILINK SER ATIVADO*`
}

exports.antilinkOn = (groupName) => {
	return`*「 ANTILINK 」*\n\n*atenção do grupo ${groupName} ativou o recurso antilink*\n*se você enviar um link de grupo, ele será chutado automaticamente*`
}

exports.antilinkOf = () => {
	return`*「 ANTILINK 」NÃO ATIVO*`
}
player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
    let list: number[] = []
    for (let value of list) {
        blocks.place(GRASS, pos(0, 0, 0))
    }
    agent.setAssist(PLACE_FROM_ANY_SLOT, true)
    player.teleport(pos(200, 200, 200))
})

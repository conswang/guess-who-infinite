const local = {
  SERVER_URI: 'http://localhost:5000/',
  DEFAULT_IMAGES: [
    { img: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/robin-young-justice.jpg', selected: false },
    { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/loveinterest/images/3/3d/Miss_Martian_S1.jpg/revision/latest?cb=20161117192800', selected: false },
    { img: 'https://i.redd.it/p44xngejemv21.jpg', selected: false },
    { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/a/a5/Superboy_2019.png/revision/latest?cb=20191201190422', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/dchallofjustice/images/7/72/Yj-aquaman.jpg/revision/latest/scale-to-width-down/340?cb=20110709171331', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/1/15/Martian_Manhunter.png/revision/latest/top-crop/width/360/height/450?cb=20120329123652', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0d/Red_Arrow.png/revision/latest?cb=20190813094818', selected: false },
    { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/batman/images/0/0e/Zatanna.png/revision/latest/top-crop/width/360/height/450?cb=20191015214642', selected: false },
    { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430', selected: false },
    { img: 'https://i.redd.it/p44xngejemv21.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c8/Wolf.png/revision/latest/top-crop/width/720/height/900?cb=20111112203250', selected: false },
    { img: 'https://i.ytimg.com/vi/XOM-QowhK2A/maxresdefault.jpg', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/batman/images/d/d2/Batgirl.png/revision/latest/top-crop/width/360/height/450?cb=20120508195956', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/batman/images/0/0e/Zatanna.png/revision/latest/top-crop/width/360/height/450?cb=20191015214642', selected: false },
  ] 
}

const prod = {
  SERVER_URI: 'https://guess-who-infinite-server.herokuapp.com/',
  DEFAULT_IMAGES: [
    { img: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/robin-young-justice.jpg', selected: false },
    { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/loveinterest/images/3/3d/Miss_Martian_S1.jpg/revision/latest?cb=20161117192800', selected: false },
    { img: 'https://i.redd.it/p44xngejemv21.jpg', selected: false },
    { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/a/a5/Superboy_2019.png/revision/latest?cb=20191201190422', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/dchallofjustice/images/7/72/Yj-aquaman.jpg/revision/latest/scale-to-width-down/340?cb=20110709171331', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/1/15/Martian_Manhunter.png/revision/latest/top-crop/width/360/height/450?cb=20120329123652', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0d/Red_Arrow.png/revision/latest?cb=20190813094818', selected: false },
    { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/batman/images/0/0e/Zatanna.png/revision/latest/top-crop/width/360/height/450?cb=20191015214642', selected: false },
    { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430', selected: false },
    { img: 'https://i.redd.it/p44xngejemv21.jpg', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c8/Wolf.png/revision/latest/top-crop/width/720/height/900?cb=20111112203250', selected: false },
    { img: 'https://i.ytimg.com/vi/XOM-QowhK2A/maxresdefault.jpg', selected: false},
    { img: 'https://vignette.wikia.nocookie.net/batman/images/d/d2/Batgirl.png/revision/latest/top-crop/width/360/height/450?cb=20120508195956', selected: false },
    { img: 'https://vignette.wikia.nocookie.net/batman/images/0/0e/Zatanna.png/revision/latest/top-crop/width/360/height/450?cb=20191015214642', selected: false },
  ] 
}

export const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : local;

import { getRandomElementFromArray, getRandomInt } from "./../../utility_functions/randomFunctions.js";

const textEmoji = [
    '(●ˇ∀ˇ●)',
    '(✿◡‿◡)',
    'ヾ(＠⌒ー⌒＠)ノ',
    '（￣︶￣）↗　',
    '^o^',
    '^3^',
    `\\^o^/`,
]

const hereAreSomeLines = [
    'Here are some songs for you',
    'I understand how you feel, try listening to these songs',
    'Check out these songs buddy',
    'My personal song recommendations for you',
    'I rec'
]

const happySongList = [
    "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ?si=105bd143e0ec4a84",
    "https://open.spotify.com/track/2pHoxVhN6HYa01DLJuazgl?si=68b77b7fc4214a4d",
    "https://open.spotify.com/track/1EzrEOXmMH3G43AXT1y7pA?si=041de2bacfb34194",
    "https://open.spotify.com/track/7Gjl3cSoQb1lSVGMGPEP5R?si=3b7609066c464634",
    "https://open.spotify.com/track/7HWxIBizOFNo505Ljw6IcV?si=efad7f2a57534634",
    "https://open.spotify.com/track/42Evkd6cLmQGfbWou7KZdx?si=c775045f7c1d464c",
    "https://open.spotify.com/track/1GSNlyKCgpFl3Qm84IG5XY?si=21cb85bbe2714faa",
    "https://open.spotify.com/track/4Xj0zimzNjGnfHwkToTZpS?si=0c60991057bf450b",
    "https://open.spotify.com/track/3z5RPOWBVEz3oby2vuESye?si=e5c261d77dff4584",
    "https://open.spotify.com/track/3jjujdWJ72nww5eGnfs2E7?si=b8ff43440ca34a8e",
    "https://open.spotify.com/track/2P91MQbaiQOfbiz9VqhqKQ?si=301707383eda4f98",
    "https://open.spotify.com/track/02gdZzM89ocwHjs9H58csJ?si=df1a1e2e86154371",
    "https://open.spotify.com/track/3ZCVtNy6NDzG0SUx5VBkvH?si=eed8597082634179",
    "https://open.spotify.com/track/58IKrOF6jVFROFwPukNJwF?si=04d7fb93f45a48fe",
    "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=9e736c5dd510469b",
    "https://open.spotify.com/track/1qEmFfgcLObUfQm0j1W2CK?si=96b1908a7d144105",
    "https://open.spotify.com/track/0ri0Han4IRJhzvERHOZTMr?si=b5594134b25c4116",
    "https://open.spotify.com/track/57BpIYt0yG1si2BzTz6i7H?si=3b37cf26237e4931",
];

const sadSongList = [
    'https://open.spotify.com/track/7F1CiKqrY44kh5cDqwHOnx?si=b36193351a674f21',
    'https://open.spotify.com/track/1tg28JiXBuaUj5bZ8Ppuum?si=5ab187b10f2e4d0a',
    'https://open.spotify.com/track/2xKy8HbpMFgHV2xZhpQf12?si=2abc6c9138874f60',
    'https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf?si=09dd91682dc6471c',
    'https://open.spotify.com/track/0ecC8p17cDNlxHXkuYqeR6?si=b99d36d66b744814',
    'https://open.spotify.com/track/2gMXnyrvIjhVBUZwvLZDMP?si=8ef6e0d4648e4da8',
    'https://open.spotify.com/track/0aPZbnkMoWJaJ5CNVLCj8S?si=3f77379a3cb14ec4',
    'https://open.spotify.com/track/4IqcDJPzDL8Hq8KwAX4jUE?si=1adf7bfd8a124e59',
    'https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=e9d228df881a44cd',
    'https://open.spotify.com/track/6DEMMeWXfmFAXgDUMMzeg6?si=f1d850119fb042b5',
    'https://open.spotify.com/track/3FAJ6O0NOHQV8Mc5Ri6ENp?si=46138ecae5e04761',
    'https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=5e3aa2e806db4432',
    'https://open.spotify.com/track/202lm9YX5WmAac83tOGlVn?si=6ce54763910e4f6d',
    'https://open.spotify.com/track/4l0Mvzj72xxOpRrp6h8nHi?si=b69f0cb6e4954b79',
    'https://open.spotify.com/track/44n97yHySt0Z9rqPaXgjCK?si=8e9bfa624b1d4d07',
    'https://open.spotify.com/track/4rHZZAmHpZrA3iH5zx8frV?si=8ad8918f89924ee9',
    'https://open.spotify.com/track/1roCmBlcpV7LzsmB7pmCyt?si=4a9bb8809e2548ce',];

const fearSongList = [
    'https://open.spotify.com/track/7F1CiKqrY44kh5cDqwHOnx?si=b36193351a674f21',
    'https://open.spotify.com/track/1tg28JiXBuaUj5bZ8Ppuum?si=5ab187b10f2e4d0a',
    'https://open.spotify.com/track/2xKy8HbpMFgHV2xZhpQf12?si=2abc6c9138874f60',
    'https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf?si=09dd91682dc6471c',
    'https://open.spotify.com/track/0ecC8p17cDNlxHXkuYqeR6?si=b99d36d66b744814',
    'https://open.spotify.com/track/2gMXnyrvIjhVBUZwvLZDMP?si=8ef6e0d4648e4da8',
    'https://open.spotify.com/track/0aPZbnkMoWJaJ5CNVLCj8S?si=3f77379a3cb14ec4',
    'https://open.spotify.com/track/4IqcDJPzDL8Hq8KwAX4jUE?si=1adf7bfd8a124e59',
    'https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=e9d228df881a44cd',
    'https://open.spotify.com/track/6DEMMeWXfmFAXgDUMMzeg6?si=f1d850119fb042b5',
    'https://open.spotify.com/track/3FAJ6O0NOHQV8Mc5Ri6ENp?si=46138ecae5e04761',
    'https://open.spotify.com/track/4xqrdfXkTW4T0RauPLv3WA?si=5e3aa2e806db4432',
    'https://open.spotify.com/track/202lm9YX5WmAac83tOGlVn?si=6ce54763910e4f6d',
    'https://open.spotify.com/track/4l0Mvzj72xxOpRrp6h8nHi?si=b69f0cb6e4954b79',
    'https://open.spotify.com/track/44n97yHySt0Z9rqPaXgjCK?si=8e9bfa624b1d4d07',
    'https://open.spotify.com/track/4rHZZAmHpZrA3iH5zx8frV?si=8ad8918f89924ee9',
    'https://open.spotify.com/track/1roCmBlcpV7LzsmB7pmCyt?si=4a9bb8809e2548ce',
];

const surpriseSongList = [
    'https://open.spotify.com/track/5vkHln7TXHYhFNeiUXjSPb?si=c4ff5d79da484a7b',
    'https://open.spotify.com/track/4pJ15e9awy9c4eajhHmJO1?si=5369e0d2644245c2',
    'https://open.spotify.com/track/1cAAMfSgl4ZmBSQnj3jMx2?si=47da082522fb46b8',
    'https://open.spotify.com/track/0gplL1WMoJ6iYaPgMCL0gX?si=61f899a9d46342d0',
    'https://open.spotify.com/track/1dEy9Pl81QopSxNsPxXQxv?si=5af234625bea4bb7',
    'https://open.spotify.com/track/74cVJfmK18rhWnscIpGXjt?si=7b784eb4f7be462e',
    'https://open.spotify.com/track/7cvkXf3AwPGT041PyOi5VX?si=3cbbab6cc7594bc3',
    'https://open.spotify.com/track/4kUUBaZzEAs7dhIu6EpdyS?si=ab503572e2af40ad',
    'https://open.spotify.com/track/0xKBkLcF71uUQeTA7FSu4A?si=ad4f0194f267437a',
    'https://open.spotify.com/track/3DZQ6mzUkAdHqZWzqxBKIK?si=879f8ca644ed4ad3',
    'https://open.spotify.com/track/64Nbnw22f8adeMuLd1nSBD?si=23bc3b3719914f8a',
    'https://open.spotify.com/track/6PXUv7YuTC2Ua1rowd9Uql?si=2536d4f18d9a457f',
    'https://open.spotify.com/track/3ibKnFDaa3GhpPGlOUj7ff?si=4e3ed8771763481d',
    'https://open.spotify.com/track/15C4TnrrVdym7UykxQIOTZ?si=38f14d728cdd47d4',
    'https://open.spotify.com/track/0USZx50eApN045zIIyjePN?si=2e7c5911c1d849b4',
    'https://open.spotify.com/track/6DkXLzBQT7cwXmTyzAB1DJ?si=70ce38abe7d14853',
    'https://open.spotify.com/track/0aU4TRPwmyeIp9Au0mfdJi?si=456ff42aebea444c',
];

const angrySongList = [
    'https://open.spotify.com/track/7CAbF0By0Fpnbiu6Xn5ZF7?si=0991e15525d24c2e',
    'https://open.spotify.com/track/6MTfKxsjHEsH8GtHfKEXAA?si=440c9250e3c84cba',
    'https://open.spotify.com/track/1cqWEQ6TRfYr3SBNh7Ni2w?si=cb5f403f40b94d71',
    'https://open.spotify.com/track/6wqJeItl3Vc3az4ZicSQAB?si=a1187ce4e5be4831',
    'https://open.spotify.com/track/6Q1m1GyNxyOwZ2ud3p7XoS?si=91bf6e40ada54f9d',
    'https://open.spotify.com/track/35ZmCVnfYRdK1iLGCxNhMa?si=a56e62ba276b4124',
    'https://open.spotify.com/track/2yss0n7KmvmSr4EHvjfFpn?si=28488081d3cd43ff',
    'https://open.spotify.com/track/6hzwfFKrTabeUsW5SWti17?si=8140f4717de04df7',
    'https://open.spotify.com/track/1xy0q3FfTwJw3wncjZQcQL?si=2b7de3f942724735',
    'https://open.spotify.com/track/3P5d5T7VvJvOh61rxpS7X3?si=f6a807eaf239465d',
    'https://open.spotify.com/track/2IfhcF9NnpoBBdbdmAifx0?si=8dc01a32695c47d1',
    'https://open.spotify.com/track/4am4K4T77bNZTlYmX3GMYa?si=800194ea89f240b4',
    'https://open.spotify.com/track/6SgTGVF28auhl3Bf1Ur5qY?si=05a0d5514441490c',
    'https://open.spotify.com/track/1D0cNzwQyukC8PYhAgoRHf?si=ac0e1ce81e904c45',
    'https://open.spotify.com/track/0I1RXRwNsG4RSAsknXNRA8?si=24004eef72a94293',
    'https://open.spotify.com/track/28UKSTXNVOJJBmaAXAGt01?si=85821221a8c2448f',
    'https://open.spotify.com/track/1xoigddYLuUFszTRCoPvkr?si=9c68b7814aff48a4',
    'https://open.spotify.com/track/7C1UeCvuHHhNomalplHgRD?si=1c761896cbaa4f90',
];

const songByID = [
    happySongList,
    angrySongList,
    surpriseSongList,
    sadSongList,
    fearSongList,
]

function getSongByID(id)
{
    if (id < 0 || id >= songByID.length) {
        return ""
    } else {
        var x = getRandomInt(songByID.length - 1);
        var y = getRandomInt(songByID.length - 1);

        while (x === y) {
            y = getRandomInt(songByID.length - 1);
        }

        return `${getRandomElementFromArray(hereAreSomeLines)} ${getRandomElementFromArray(textEmoji)}\n${songByID[id][x]}\n${songByID[id][y]}`
    }
}

export { getSongByID as default }
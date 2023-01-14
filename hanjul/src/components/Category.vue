<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" @click = "$store.commit('changeCategory','Home')">한줄평</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" @click = "$store.commit('changeCategory','life')">일상</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click = "$store.commit('changeCategory','game')">게임</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">영화</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    data() {

    }
}
</script>

<style>

</style>
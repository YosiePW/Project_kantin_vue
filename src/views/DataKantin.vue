<template>
 <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
      <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Data Kantin</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Data Kantin</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <a href="#" class="btn btn-success btn-md">Tambah</a>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0" style="height: 300px;">
                <table class="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Kantin</th>
                      <th>No.Stand</th>
                      <th>Nama Penyewa</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kantin Murmer</td>
                      <td>Stand 8</td>
                      <td>Mr.Yoyok</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Kantin Kopi.ID</td>
                      <td>Stand 11</td>
                      <td>Mbak Win</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Burger Juos</td>
                      <td>Stand 3</td>
                      <td>Pak Mukhlis</td>
                      <td>
                          <a class="btn btn-info" href="#">Ubah</a>
                          <a class="btn btn-danger" href="#">Hapus</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  </div>
  </div>
</template>